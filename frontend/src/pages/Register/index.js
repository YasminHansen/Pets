import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaDog, FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';
import './style.css';

export default function Register(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            city,
            uf,
        };

        try{
            const response = await api.post('user', data);
            alert(`Bem vindo, ${ response.data.name }!`);

            history.push('/');
        } catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
           <div className="content">
                <section>
                    <h1>
                        Cadastro 
                        < FaDog color="#b757e2" />
                    </h1>
                    <p>Faça seu cadastro, entre na plataforma e organize as informações dos seus pets.</p>
                    <Link className="back-link" to="/">
                        < FaArrowLeft size={ 16 } color="#b757e2" /> 
                        Voltar para home
                    </Link>
                </section> 

                <form onSubmit={ handleRegister }>  
                    <input 
                        placeholder="Nome"
                        value={ name } 
                        onChange={ e => setName(e.target.value) } />

                    <input type="email" 
                        placeholder="E-mail"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) } />

                    <input type="password" 
                        placeholder="Senha" 
                        value={ password }
                        onChange={ e => setPassword(e.target.value) } />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={ city }
                            onChange={ e => setCity(e.target.value) } />

                        <input 
                            placeholder="UF" style={{ width: 80 }}
                            value={ uf }
                            onChange={ e => setUf(e.target.value) } />
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>

                </form>  

            </div> 
        </div>
    );
}