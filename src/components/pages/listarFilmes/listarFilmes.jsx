import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './listarFilmes.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../../axiosConfig';


function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const response = await api.get("http://localhost:3333/filmes");
        setFilmes(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    const tipo = localStorage.getItem("typeUser");
    setTipoUsuario(tipo);

    fetchFilmes();
  }, []);

  const irParaDetalhes = (filme) => {
    navigate(`/filme/${filme.id_movie}`, { state: filme });
  };

  const excluirFilme = async (id, e) => {
    e.stopPropagation();

    const confirmacao = window.confirm("Tem certeza que deseja excluir este filme?");
    if (!confirmacao) return;

    try {
      await api.delete(`http://localhost:3333/filmes/${id}`);
      setFilmes(filmes.filter(filme => filme.id_movie !== id));
    } catch (error) {
      console.error("Erro ao excluir o filme:", error);
    }
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => {
            localStorage.clear();
            navigate('/login');
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

      <div className={style.grid}>
        {filmes.map((filme) => (
          <div
            key={filme.id_movie}
            className={style.card}
            onClick={() => irParaDetalhes(filme)}
          >
            <img
              src={`/assets/${filme.imagem}`}
              alt={filme.name_movie}
              className={style.thumbnail}
            />

            <p className={style.title}>{filme.name_movie}</p>

            {tipoUsuario === "admin" ? (
              <>
                <button onClick={(e) => { e.stopPropagation(); navigate(`/filme/editar/${filme.id_movie}`); }}>Editar</button>

                <button onClick={(e) => excluirFilme(filme.id_movie, e)}>Excluir</button>

                <button
                  className={style.botaoAdicionar}
                  onClick={(e) => { e.stopPropagation(); navigate("/cadastrarFilme"); }}
                >
                  Adicionar Filme
                </button>
              </>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/Resenha/Get`);
                }}
              >
                Fazer Resenha
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );

}

export default ListarFilmes;
