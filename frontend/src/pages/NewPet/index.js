import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaArrowLeft } from 'react-icons/fa';


import './style.css';

export default function NewPet(){
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

             <form>
                <input placeholder="Nome"/>
                <input type="number" placeholder="Idade"/> 
                <input type="number" placeholder="Peso" />
                <div className="input-group">
                    <div>
                        <p>Gênero: </p>
                        <select name="Gênero">
                            <option value="female">Fêmea</option>
                            <option value="male">Macho</option>
                        </select>
                    </div>
                    <div>
                        <p>Cadastrado: </p>
                        <select name="Castrado">
                            <option value="yes">Sim</option>
                            <option value="no">Não</option>
                        </select>
                    </div>
                </div>
                <input placeholder="Doenças" />
                <button className="button" type="submit">
                    Cadastrar
                </button>

             </form>  

         </div> 
     </div>
    );
}