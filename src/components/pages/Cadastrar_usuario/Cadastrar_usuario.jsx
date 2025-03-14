import style from "./Cadastrar_usuario.module.css";
import { useState } from "react";

function Cadastrar_usuario() {
  const [cadsUser, setCadseUser] = useState({
    nome: "a",
    sobrenome: "",
    nome_usuario: "",
    email: "",
    senha: "",
    telefone: "",
  });

  function submit(event) {
    event.preventDefault();
    console.log(cadsUser);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Nome:</label>
          <input
            placeholder="Digite Nome"
            value={nome}
            onChange={(e) => {
              changeUser.nome(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Sobrenome:</label>
          <input
            placeholder="Digite Sobrenome"
            value={sobrenome}
            onChange={(e) => {
              changeUser.sobrenome(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Nome de usuario:</label>
          <input
            placeholder="Digite Nome de usuario"
            value={nome_usuario}
            onChange={(e) => {
              changeUser.nome_usuario(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            placeholder="Digite Email"
            value={email}
            onChange={(e) => {
              changeUser.email(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            placeholder="Digite Senha"
            value={senha}
            onChange={(e) => {
              changeUser.senha(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Telefone:</label>
          <input
            placeholder="Digite Telefone"
            value={telefone}
            onChange={(e) => {
              changeUser.telefone(e.target.value);
            }}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastrar_usuario;
