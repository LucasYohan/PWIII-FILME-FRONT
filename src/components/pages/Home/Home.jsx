import style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/listarFilmes');
  };

  return (
    <div className={style.Home}>

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

      <p className={style.Texto}>Seja-Bem Vindo ao ResenhaPOP!!</p>
      <button className={style.Botao} onClick={handleNavigate}>
        Ver Filmes
      </button>
    </div>
  );
}

export default Home;  