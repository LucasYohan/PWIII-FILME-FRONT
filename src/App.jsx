import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/layout/Container/Container";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import ListarFilme from "./components/pages/Listar_filme/ListarFilme";
import CadastrarFilme from "./components/pages/Cadastrar_filme/CadastrarFilme";
import CadastrarUsuario from "./components/pages/Cadastrar_usuario/Cadastrar_usuario";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<Navigate to="/cadastrar_usuario" />} />
              <Route path="/cadastrar_usuario" element={<CadastrarUsuario />} />
              <Route path="/home" element={<Home />} />
              <Route path="/listar_filme" element={<ListarFilme />} />
              <Route path="/cadastrar_filme" element={<CadastrarFilme />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;