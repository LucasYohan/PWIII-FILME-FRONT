import style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/listarFilmes');
  };

  return (
    <div className={style.Home}>
      <p className={style.Texto}>Seja-Bem Vindo ao ResenhaPOP!!</p>
      <button className={style.Botao} onClick={handleNavigate}>
        Ver Filmes
      </button>
    </div>
  );
}

export default Home;