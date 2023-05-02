import React from "react";
import { Component,Row,Button} from 'reactstrap'
import {NavLink,Link} from 'react-router-dom'

const nav__links = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'#',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    },
]

const Header =() =>{
    return <div>Header</div>;
};

export default Header;