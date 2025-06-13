import style from "./Cadastrar_usuario.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../axiosConfig";

function Cadastrar_usuario() {

  const navigate = useNavigate()

  const [cadsUser, setCadsUser] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    telephone: "",
  });

  function handleChange(e) {
    setCadsUser({ ...cadsUser, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("http://localhost:3333/Cadastrar_usuario/Post", cadsUser, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error.response?.data || error.message);
    }
  };


  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>

        <div className={style.inputGroup}>
          <label className={style.label}>Nome:</label>
          <input
            className={style.input}
            name="name"
            placeholder="Digite Nome"
            value={cadsUser.nome}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Sobrenome:</label>
          <input
            className={style.input}
            name="surname"
            placeholder="Digite seu sobrenome"
            value={cadsUser.surname}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Nome de usuário:</label>
          <input
            className={style.input}
            name="username"
            placeholder="Digite Nome de usuário"
            value={cadsUser.username}
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
            name="password"
            type="password"
            placeholder="Digite Senha"
            value={cadsUser.password}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.label}>Telefone:</label>
          <input
            className={style.input}
            name="telephone"
            placeholder="Digite Telefone"
            value={cadsUser.telephone}
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