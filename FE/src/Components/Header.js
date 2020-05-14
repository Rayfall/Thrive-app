import React from "react";
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import './Styles/header.css';
import './Styles/hamburger.css';

export default function Header() {
    return (
    <div className="background-header nav" id="outer-container">
        <div className="logo-div"><Link to="/"><span><img className="logo-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589477773/Thrive/logo_dlyevb.png" alt="Thrive Logo"></img></span></Link></div>
        <Menu>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/login">Login</Link></div>
          <div><Link to="/user">View Profile</Link></div>
          <div><Link to="/groups">View Groups</Link></div>
          <div><Link to="/friends">View Friends</Link></div>
          <div><Link to="/tasks">View Tasks</Link></div>
        </Menu>
        <div className="login-div"><Link to="/login"><span><img className="login-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589492993/Thrive/user_nh52qw.png" alt="Login Logo"></img></span></Link></div>
    </div>
    );
}


