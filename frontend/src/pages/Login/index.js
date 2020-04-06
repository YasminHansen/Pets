import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

import './style.css';
import logo from '../../assets/logo.png';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">

            <form>
                <h1 className="indieFont">Pets Agenda Virtual</h1>
                <h2>Login</h2>
                <input placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/cadastro">
                    < FaSignInAlt size={16} color="#b757e2" />
                    Criar conta
                </Link>
            </form>
            </section>

            <img src={ logo } alt="pets"/>
        </div>
    );
}