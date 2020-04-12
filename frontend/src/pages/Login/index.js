import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

import api from '../../services/api';

import './style.css';
import logo from '../../assets/logo.png';

export default function Login(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { email, password });
        
            localStorage.setItem('userName', response.data.name);

            history.push('/profile');
        } catch (err){
            alert('Falha no login. Tente novamente.');
        }
    }

    return(
        <div className="login-container">
            <section className="form">

            <form onSubmit={ handleLogin }>
                <h1 className="indieFont">Pets Agenda Virtual</h1>
                <h2>Login</h2>
                <input 
                    placeholder="E-mail"
                    value={ email }
                    onChange={ e => setEmail(e.target.value) } />
                <input type="password" 
                    placeholder="Senha"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) } />
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