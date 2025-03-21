import style from "./Cadastrar_usuario.module.css";
import { useState } from "react";

function Cadastrar_usuario() {
  const [cadsUser, setCadsUser] = useState({
    nome: "",
    sobrenome: "",
    nome_usuario: "",
    email: "",
    senha: "",
    telefone: "",
  });

  function handleChange(e) {
    setCadsUser({ ...cadsUser, [e.target.name]: e.target.value });
  }

  function submit(event) {
    event.preventDefault();
    console.log("Dados enviados:", cadsUser);
    alert("O usuário foi cadastrado com sucesso!");
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={submit}>
        
        <div className={style.inputGroup}>
          <label className={style.label}>Nome:</label>
          <input
            className={style.input}
            name="nome"
            placeholder="Digite Nome"
            value={cadsUser.nome}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Sobrenome:</label>
          <input
            className={style.input}
            name="sobrenome"
            placeholder="Digite Sobrenome"
            value={cadsUser.sobrenome}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Nome de usuário:</label>
          <input
            className={style.input}
            name="nome_usuario"
            placeholder="Digite Nome de usuário"
            value={cadsUser.nome_usuario}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Email:</label>
          <input
            className={style.input}
            name="email"
            placeholder="Digite Email"
            type="email"
            value={cadsUser.email}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Senha:</label>
          <input
            className={style.input}
            name="senha"
            type="password"
            placeholder="Digite Senha"
            value={cadsUser.senha}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Telefone:</label>
          <input
            className={style.input}
            name="telefone"
            placeholder="Digite Telefone"
            value={cadsUser.telefone}
            onChange={handleChange}
          />
        </div>

        <button className={style.button} type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastrar_usuario;