import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './CadastrarFilme.module.css';
import api from "../../../axiosConfig";


function CadastrarFilme() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilme((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("http://localhost:3333/filmes", filme);
      alert("Filme cadastrado com sucesso!");
      navigate("/listarFilmes");
    } catch (error) {
      console.error("Erro ao cadastrar filme:", error);
      alert("Erro ao cadastrar filme");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.titulo}>Cadastrar Novo Filme</h2>

      
      <label>Nome do Filme:</label>
      <input name="name_movie" value={filme.name_movie} onChange={handleChange} required />

      <label>Diretor:</label>
      <input name="director" value={filme.director} onChange={handleChange} required />

      <label>Data de Lançamento:</label>
      <input type="date" name="release_date" value={filme.release_date} onChange={handleChange} required />

      <label>Gênero:</label>
      <select name="gender_movie" value={filme.gender_movie} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="ação">Ação</option>
        <option value="comédia">Comédia</option>
        <option value="drama">Drama</option>
        <option value="terror">Terror</option>
        <option value="suspense">Suspense</option>
        <option value="ficção_cientifica">Ficção Científica</option>
      </select>

      <label>Faixa Etária:</label>
      <select name="age_range" value={filme.age_range} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="livre">Livre</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
      </select>

      <label>Ator Principal:</label>
      <input name="main_actor" value={filme.main_actor} onChange={handleChange} required />

      <label>Sinopse:</label>
      <textarea name="synopsis" value={filme.synopsis} onChange={handleChange} required />

      <label>Imagem (nome do arquivo):</label>
      <input name="imagem" value={filme.imagem} onChange={handleChange} required />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastrarFilme;
