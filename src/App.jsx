import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import CadastrarUsuario from "./components/pages/Usuarios/Cadastrar_usuario/Cadastrar_usuario";
import Login from "./components/pages/Usuarios/Login/Login";
import ListarFilmes from "./components/pages/listarFilmes/listarFilmes";

import FilmeDetalhes from "./components/pages/FilmesDetalhes/filmeDetalhes";

function App() {
  return (
    <BrowserRouter className='body'>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cadastrar_usuario" element={<CadastrarUsuario />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/listarFilmes" element={<ListarFilmes />} />
        <Route path="/filme/:id" element={<FilmeDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;