import React from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff, FaPaw, FaTrashAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';

import './style.css';

export default function Profile(){
    const userName = localStorage.getItem('userName');

    return (
        <div className="profile-container">
            <header>
                <img src={ logo } alt="pets" />
                <span>Bem vindo, { userName }!</span>

                <Link className="button" to="/pet/cadastrar">Cadastrar Pet</Link>
                <button type="button">
                    < FaPowerOff size={ 18 } color="#b757e2"/>
                </button>
            </header>

            <h1>Pets Cadastrados < FaPaw color="#b757e2"/></h1>

            <ul>
                <li>
                    <div>
                            <strong>Nome: </strong>
                            <p>Fred</p>
                        </div>
                        <div>
                            <strong>Idade: </strong>
                            <p>5 anos</p>
                        </div>
                        <div>
                            <strong>Espécie: </strong>
                            <p>Gato</p>
                        </div>
                        <div>
                            <strong>Gênero: </strong>
                            <p>Macho</p>
                        </div>
                        <div>
                            <strong>Castrado: </strong>
                            <p>Sim</p>
                        </div>
                    <button type="button">< FaTrashAlt size={ 20 } color="#b757e2"/></button>
                </li>

                <li>
                    <div>
                        <strong>Nome: </strong>
                        <p>Fred</p>
                    </div>
                    <div>
                        <strong>Idade: </strong>
                        <p>5 anos</p>
                    </div>
                    <div>
                        <strong>Espécie: </strong>
                        <p>Gato</p>
                    </div>
                    <div>
                        <strong>Gênero: </strong>
                        <p>Macho</p>
                    </div>
                    <div>
                        <strong>Castrado: </strong>
                        <p>Sim</p>
                    </div>

                    <button type="button">< FaTrashAlt size={ 20 } color="#b757e2"/></button>
                </li>

                <li>
                    <div>
                        <strong>Nome: </strong>
                        <p>Fred</p>
                    </div>
                    <div>
                        <strong>Idade: </strong>
                        <p>5 anos</p>
                    </div>
                    <div>
                        <strong>Espécie: </strong>
                        <p>Gato</p>
                    </div>
                    <div>
                        <strong>Gênero: </strong>
                        <p>Macho</p>
                    </div>
                    <div>
                        <strong>Castrado: </strong>
                        <p>Sim</p>
                    </div>

                    <button type="button">< FaTrashAlt size={ 20 } color="#b757e2"/></button>
                </li>

                <li>
                    <div>
                        <strong>Nome: </strong>
                        <p>Fred</p>
                    </div>
                    <div>
                        <strong>Idade: </strong>
                        <p>5 anos</p>
                    </div>
                    <div>
                        <strong>Espécie: </strong>
                        <p>Gato</p>
                    </div>
                    <div>
                        <strong>Gênero: </strong>
                        <p>Macho</p>
                    </div>
                    <div>
                        <strong>Castrado: </strong>
                        <p>Sim</p>
                    </div>

                    <button type="button">< FaTrashAlt size={ 20 } color="#b757e2"/></button>
                </li>
            </ul>
        </div>
    );
}