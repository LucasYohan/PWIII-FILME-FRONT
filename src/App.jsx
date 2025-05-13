import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ListarFilme from "./components/pages/Filmes/Listar_filme/ListarFilme";
import CadastrarFilme from "./components/pages/Filmes/Cadastrar_filme/CadastrarFilme";
import CadastrarUsuario from "./components/pages/Usuarios/Cadastrar_usuario/Cadastrar_usuario";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <BrowserRouter className='body'>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cadastrar_usuario" element={<CadastrarUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listar_filme" element={<ListarFilme />} />
        <Route path="/Cadastrar_filme" element={<CadastrarFilme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;