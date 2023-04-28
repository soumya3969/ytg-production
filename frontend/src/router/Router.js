import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../Pages/Home';
import Tours from './../Pages/Tours';
import TourDetails from './../TourDetails';
import Login from './../Login';
import Registration from './../Registration';


const Routers = ()=>{
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
        </Routes>
    )
};
export default Routers;