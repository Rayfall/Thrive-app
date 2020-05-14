import React from "react";
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import './Styles/header.css';

export default function Header() {
    return (
    <div className="background-header">
        <div className="logo-div"><Link to="/"><span><img className="logo-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589477773/Thrive/logo_dlyevb.png" alt="Thrive Logo"></img></span></Link></div>
        <Menu width={ '20%' } >
          <div><Link to="/">Home</Link></div>
          <div><Link to="/login">Login</Link></div>
          <div><Link to="/user">Secret</Link></div>
          <div><Link to="/groups">Secret</Link></div>
          <div><Link to="/tasks">Secret</Link></div>
        </Menu>
    </div>
    );
    }