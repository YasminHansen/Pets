import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewPet from './pages/NewPet';
import Schedule from './pages/Schedule';
import NewSchedule from './pages/NewSchedule';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />
                <Route path="/cadastro" component={ Register } />
                <Route path="/profile" component={ Profile } />
                <Route path="/pet/cadastrar" component={ NewPet } />
                <Route path="/agenda" component={ Schedule }/>
                <Route path="/novo-cadastro" component={ NewSchedule }/>
            </Switch>
        </BrowserRouter>
    );
}