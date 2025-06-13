import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import CadastrarUsuario from "./components/pages/Usuarios/Cadastrar_usuario/Cadastrar_usuario";
import Login from "./components/pages/Usuarios/Login/Login";
import ListarFilmes from "./components/pages/listarFilmes/listarFilmes";
import EditarFilme from "./components/pages/EditarFilme/EditarFilme";
import CadastrarFilme from "./components/pages/CadastrarFilme/CadastrarFilme";
import FilmeDetalhes from "./components/pages/FilmesDetalhes/filmeDetalhes";
import ResenhaGet from "./components/pages/Resenhas/Get/Get";
import ResenhaPost from "./components/pages/Resenhas/Post/Post";
import ResenhaPut from "./components/pages/Resenhas/Put/Put";
import ResenhaDelete from "./components/pages/Resenhas/Delete/Delete";

const isAuthenticated = () => {
  return localStorage.getItem("token");
};

function App() {
  return (
    <BrowserRouter className='body'>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cadastrar_usuario" element={<CadastrarUsuario />} />
        <Route path="/Home" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
        <Route path="/listarFilmes" element={isAuthenticated() ? <ListarFilmes /> : <Navigate to="/login" />} />
        <Route path="/filme/:id" element={isAuthenticated() ? <FilmeDetalhes /> : <Navigate to="login" />} />
        <Route path="/filme/editar/:id" element={isAuthenticated() ? <EditarFilme /> : <Navigate to="/login" />} />
        <Route path="/cadastrarFilme" element={isAuthenticated() ? <CadastrarFilme /> : <Navigate to="/login" />} />
        <Route path="/Resenha/Get" element={isAuthenticated() ? <ResenhaGet /> : <Navigate to="/login" />} />
        <Route path="/Resenha/Post" element={isAuthenticated() ? <ResenhaPost /> : <Navigate to="/login" />} />
        <Route path="/Resenha/Put" element={isAuthenticated() ? <ResenhaPut /> : <Navigate to="/login" />} />
        <Route path="/Resenha/Delete" element={isAuthenticated() ? <ResenhaDelete /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;