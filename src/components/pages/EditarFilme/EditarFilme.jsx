import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './EditarFilme.module.css';
import api from "../../../axiosConfig";
import { FaArrowLeft } from "react-icons/fa";

function EditarFilme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({
    name_movie: "",
    director: "",
    release_date: "",
    gender_movie: "",
    age_range: "",
    main_actor: "",
    synopsis: "",
    imagem: ""
  });

  useEffect(() => {
    async function fetchFilme() {
      try {
        const res = await api.get(`http://localhost:3333/filmes/${id}`);
        setFilme(res.data);
      } catch (error) {
        console.error("Erro ao carregar filme:", error);
      }
    }
    fetchFilme();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilme((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`http://localhost:3333/filmes/${id}`, filme);
      alert("Film'e atualizado com sucesso!");
      navigate("/listarFilmes");
    } catch (error) {
      console.error("Erro ao atualizar filme:", error);
      alert("Erro ao atualizar filme");
    }
  };

  return (
    <>

      <div style={{ padding: '20px' }}>
        <button
          onClick={() => {
            navigate('/listarFilmes');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          <FaArrowLeft />
          Sair
        </button>
      </div>


      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Nome do Filme:</label>
        <input
          name="name_movie"
          value={filme.name_movie}
          onChange={handleChange}
          required
        />

        <label>Diretor:</label>
        <input
          name="director"
          value={filme.director}
          onChange={handleChange}
          required
        />

        <label>Data de Lançamento:</label>
        <input
          type="date"
          name="release_date"
          value={filme.release_date ? filme.release_date.slice(0, 10) : ""}
          onChange={handleChange}
          required
        />

        <label>Gênero:</label>
        <select
          name="gender_movie"
          value={filme.gender_movie}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="ação">Ação</option>
          <option value="comédia">Comédia</option>
          <option value="drama">Drama</option>
          <option value="terror">Terror</option>
          <option value="suspense">Suspense</option>
          <option value="ficção_cientifica">Ficção Científica</option>
        </select>

        <label>Faixa Etária:</label>
        <select
          name="age_range"
          value={filme.age_range}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="livre">Livre</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
        </select>

        <label>Ator Principal:</label>
        <input
          name="main_actor"
          value={filme.main_actor}
          onChange={handleChange}
          required
        />

        <label>Sinopse:</label>
        <textarea
          name="synopsis"
          value={filme.synopsis}
          onChange={handleChange}
          required
        />

        <label>Imagem (nome do arquivo):</label>
        <input
          name="imagem"
          value={filme.imagem}
          onChange={handleChange}
          required
        />

        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default EditarFilme;