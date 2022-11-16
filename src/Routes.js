import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import NotFoundPage from './pages/404Page';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';

const Routes = () => (
    <Switch>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/counter' element={<CounterPage/>} />

        <Route path='/*' element={<NotFoundPage/>} />
    </Switch>
);

export default Routes;