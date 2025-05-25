import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './listarFilmes.module.css';
import axios from 'axios';

function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const response = await axios.get("http://localhost:3333/listarFilmes");
        setFilmes(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchFilmes();
  }, []);

  const irParaDetalhes = (filme) => {
    navigate(`/filme/${filme.id}`, { state: filme });
  };

  return (
    <div className={style.grid}>
      {filmes.map((filme) => (
        <div
          key={filme.id}
          className={style.card}
          onClick={() => irParaDetalhes(filme)}
        >
          <img
            src={`/assets/${filme.imagem}`}  
            alt={filme.name_movie}
            className={style.thumbnail}
          />

          <p className={style.title}>{filme.name_movie}</p>

          <button>Editar</button>
          <button>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default ListarFilmes;
