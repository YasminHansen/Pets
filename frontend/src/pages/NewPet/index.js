import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPaw, FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';
import './style.css';

export default function NewPet(){
    const [ name, setName] = useState('');
    const [ age, setAge ] = useState('');
    const [ weight, setWeight ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ castrated, setCastrated ] = useState('');
    const [ disease, setDisease ] = useState('');

    const userId = localStorage.getItem('userId');
    const history = useHistory();

    async function handleNewPet(e){
        e.preventDefault();

        const data={
            name,
            age,
            weight,
            gender,
            castrated,
            disease,
        }

        try{
            await api.post('pets', data, {
                headers: {
                    Authorization: userId
                }
            })

            history.push('/profile');
        } catch(err){
            alert('Erro ao cadastrar pet. Tente novamente.');
        }
    }

    return (
        <div className="new-pet-container">
        <div className="content">
             <section>
                 <h1>
                     Cadastrar novo pet 
                     < FaPaw color="#b757e2" />
                 </h1>
                 <p>Preencha com as informações do seu pet.</p>
                 <Link className="back-link" to="/profile">
                     < FaArrowLeft size={ 16 } color="#b757e2" /> 
                     Voltar para home
                 </Link>
             </section> 

             <form onSubmit={ handleNewPet }>
                <input 
                    placeholder="Nome" 
                    value={ name }
                    onChange={ e => setName(e.target.value) }/>
                
                <input type="number" 
                    placeholder="Idade" 
                    value={ age }
                    onChange={ e => setAge(e.target.value) }/>
                
                <input type="number" 
                    placeholder="Peso" 
                    value={ weight }
                    onChange={ e => setWeight(e.target.value) }/>
                
                <div className="input-group">
                    <div>
                        <p>Gênero: </p>
                        <select name="Gênero"
                            value={ gender }
                            onChange={ e => setGender(e.target.value) }>
                            <option selected>Selecionar</option>
                            <option value="Femea">Fêmea</option>
                            <option value="Macho">Macho</option>
                        </select>
                    </div>
                    <div>
                        <p>Cadastrado: </p>
                        <select name="Castrado"
                            value={ castrated }
                            onChange={ e => setCastrated(e.target.value) }>
                            <option selected>Selecionar</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>
                </div>
                
                <input 
                    placeholder="Doenças" 
                    value={ disease }
                    onChange={ e => setDisease(e.target.value) }/>
                <button className="button" type="submit">
                    Cadastrar
                </button>

             </form>  

         </div> 
     </div>
    );
}