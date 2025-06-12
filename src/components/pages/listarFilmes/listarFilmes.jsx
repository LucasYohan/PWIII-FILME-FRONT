import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './listarFilmes.module.css';
import axios from 'axios';
import EditarFilme from '../EditarFilme/EditarFilme';

function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const response = await axios.get("http://localhost:3333/filmes");
        setFilmes(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchFilmes();
  }, []);

  const irParaDetalhes = (filme) => {
    navigate(`/filme/${filme.id_movie}`, { state: filme });
  };

  const excluirFilme = async (id, e) => {
  e.stopPropagation(); // Impede clique no botão de ativar navegação

  const confirmacao = window.confirm("Tem certeza que deseja excluir este filme?");
  if (!confirmacao) return;

  try {
    await axios.delete(`http://localhost:3333/filmes/${id}`);
    setFilmes(filmes.filter(filme => filme.id_movie !== id));
  } catch (error) {
    console.error("Erro ao excluir o filme:", error);
  }
};

  return (
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

          <button onClick={(e) => {e.stopPropagation(); navigate(`/filme/editar/${filme.id_movie}`);}}>Editar</button>

          <button onClick={(e) => excluirFilme(filme.id_movie, e)}>Excluir</button>

          <button className={style.botaoAdicionar} onClick={(e) => {e.stopPropagation();navigate("/cadastrarFilme")}}>Adicionar Filme</button>
        </div>
      ))}
    </div>
  );
}

export default ListarFilmes;
