import { useLocation } from "react-router-dom";
import Filmes from "../../layout/Filmes/Filmes";

function FilmeDetalhes() {
  const { state } = useLocation();

  if (!state) {
    return <p>Filme não encontrado</p>;
  }

  return (
    <div>
      <Filmes {...state} />
    </div>
  );
}

export default FilmeDetalhes;
