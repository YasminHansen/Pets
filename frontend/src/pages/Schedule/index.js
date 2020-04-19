import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaArrowLeft } from 'react-icons/fa';


import './style.css';
import logo from '../../assets/logo2.png';

export default function Schedule(){
    return (
        <div class="schedule-container">
            <header>
                <div className="header-options">
                    <img src={ logo } alt='pets'/>
                    <span>Cadastre os compromissos do seu pet.</span>

                    <Link className="button" to="/novo-cadastro">Cadastrar na agenda</Link>
                    <button type="button">
                        < FaPowerOff size={ 18 } color="#b757e2"/>
                    </button>
                </div>
                <Link to="/profile">
                    <FaArrowLeft size={ 18 } color="#b757e2"/>
                    Voltar para home</Link>
            </header>
        </div>
    );
}