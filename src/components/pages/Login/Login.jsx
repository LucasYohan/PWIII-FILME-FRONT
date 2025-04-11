import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './Login.module.css';
import { FaEye as VisiblePassword } from "react-icons/fa";
import { FaEyeSlash as HiddenPassword } from "react-icons/fa6";

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [passwordV, setPasswordV] = useState(false);
    const [typePassword, setTypePassword] = useState('password');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {
                name,
                password,
            });
            localStorage.setItem('token', response.data.token);
            alert('Login realizado com sucesso!');
            navigate('/menu');
        } catch (error) {
            console.error(error);
            alert('Usuario ou senha incorretos');
        }
    };

    const passwordVisible = () => {
        setPasswordV(true);
        setTypePassword('text');
    };

    const passwordInvisible = () => {
        setPasswordV(false);
        setTypePassword('password');
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <p>Usuário:</p>
                <input
                    type="text"
                    placeholder="Digite seu nome de usuario"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Senha:</p>
                <input
                    type={typePassword}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordV ? (
                    <VisiblePassword className={style.icon} onClick={passwordInvisible} />
                ) : (
                    <HiddenPassword className={style.icon} onClick={passwordVisible} />
                )}
                <div className={style.buttonLogin}>
                    <button className={style.botao} type="submit">Login</button>
                    <Link to="/cadastrar_usuario">
                <button className={style.botao_cadastro}>Cadastrar Usuário</button>
            </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
