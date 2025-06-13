import Style from './Filmes.module.css';
import { format } from 'date-fns';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Filmes({ name_movie, director, release_date, gender_movie, age_range, main_actor, synopsis }) {

  const Costdate = format(new Date(release_date), 'dd/MM/yyyy');

  const navigate = useNavigate();

  return (
    <div className={Style.Filmes}>
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
      <h3 className={Style.title}>{name_movie}</h3>
      <div className={Style.info}>
        <div className={Style.infoItem}><strong>Diretor:</strong> {director}</div>
        <div className={Style.infoItem}><strong>Lançamento:</strong> {Costdate}</div>
        <div className={Style.infoItem}><strong>Gênero:</strong> {gender_movie}</div>
        <div className={Style.infoItem}><strong>Classificação:</strong> {age_range}</div>
        <div className={Style.infoItem}><strong>Ator Principal:</strong> {main_actor}</div>
      </div>
      <h2 className={Style.synopsis}>{synopsis}</h2>
    </div>
  );
}

export default Filmes;