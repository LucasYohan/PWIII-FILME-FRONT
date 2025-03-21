import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Container from "./components/layout/Container/Container";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import ListarFilme from "./components/pages/Filmes/Listar_filme/ListarFilme";
import CadastrarFilme from "./components/pages/Filmes/Cadastrar_filme/CadastrarFilme";
import CadastrarUsuario from "./components/pages/Usuarios/Cadastrar_usuario/Cadastrar_usuario";
import Login from "./components/pages/Usuarios/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

function MainLayout() {
  const location = useLocation();
  const hiddenNavbarRoutes = ["/login", "/cadastrar_usuario"];

  return (
    <Container>
      {!hiddenNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="cadastrar_usuario" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar_usuario" element={<CadastrarUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listar_filme" element={<ListarFilme />} />
        <Route path="/cadastrar_filme" element={<CadastrarFilme />} />
      </Routes>
    </Container>
  );
}

export default App;