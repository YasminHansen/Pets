import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff, FaPaw, FaTrashAlt } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import './style.css';
import api from '../../services/api';

export default function Profile(){
    const [pets, setPets] = useState([]);
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then( response => {
            setPets(response.data);
        })
    }, [userId]);

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
               { pets.map(pet => (
                    <li key={ pet.id }>
                        <div>
                            <strong>Nome: </strong>
                            <p>{ pet.name }</p>
                        </div>
                        <div>
                            <strong>Idade: </strong>
                            <p>{ pet.age }</p>
                        </div>
                        <div>
                            <strong>Espécie: </strong>
                            <p>Gato</p>
                        </div>
                        <div>
                            <strong>Gênero: </strong>
                            <p>{ pet.gender }</p>
                        </div>
                        <div>
                            <strong>Castrado: </strong>
                            <p>{ pet.castrated }</p>
                        </div>
                        <button type="button">< FaTrashAlt size={ 20 } color="#b757e2"/></button>
                    </li>
               ))}
            </ul>
        </div>
    );
}