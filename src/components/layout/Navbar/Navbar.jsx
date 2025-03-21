import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>

        <li>
          <Link to={"/listar_filme"}>Listar Filmes</Link>
        </li>

        <li>
          <Link to={"/cadastrar_filme"}>Cadastrar Filmes</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
