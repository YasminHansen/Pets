import React from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import './style.css';

import logo from '../../assets/logo2.png';

export default function NewSchedule(){
    return (
        <div class="schedule-container">
            <header>
                <img src={ logo } alt='pets'/>
                <span></span>

                <Link className="button" to="/agenda">Voltar</Link>
                <Link className="button" to="/profile">Início</Link>
                <button type="button">
                    < FaPowerOff size={ 18 } color="#b757e2"/>
                </button>
            </header>
        </div>
    );
}