import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaPaw, FaTrashAlt } from 'react-icons/fa';

import logo from '../../assets/logo2.png';

import './style.css';
import api from '../../services/api';

export default function Profile(){
    const history = useHistory();

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

    async function handleDeletePet(id){
        try{
            await api.delete(`pets/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

            setPets(pets.filter(pet => pet.id !== id));
        } catch (err){
            alert('Erro ao deletar pet. Tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
                <img src={ logo } alt="pets" />
                <span>Bem vindo, { userName }!</span>

                <div className="option-group">
                    <Link className="button" to="/pet/cadastrar">Cadastrar Pet</Link>
                    <Link className="button" to="/agenda">Agenda</Link>
                </div>
                <button onClick={ handleLogout } type="button">
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
                        <button onClick={() => handleDeletePet(pet.id)} type="button">
                            < FaTrashAlt size={ 20 } color="#b757e2"/>
                        </button>
                    </li>
               ))}
            </ul>
        </div>
    );
}