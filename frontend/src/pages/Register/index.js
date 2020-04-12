import React from 'react';
import { Link } from 'react-router-dom';

import { FaDog, FaArrowLeft } from 'react-icons/fa';
import './style.css';

export default function Register(){
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

                <form>
                    <input placeholder="Nome"/>
                    <input type="email" placeholder="E-mail"/> 
                    <input type="password" placeholder="Senha" />
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>

                </form>  

            </div> 
        </div>
    );
}