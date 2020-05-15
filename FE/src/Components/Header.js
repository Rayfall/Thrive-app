import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
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
          <div><Link to="/testuser">View Profile</Link></div>
          <div><Link to="/testgroup">View Groups</Link></div>
          <div><Link to="/testfriends">View Friends</Link></div>
          <div><Link to="/tasks">View Tasks</Link></div>
        </Menu>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="menu-nav">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button" className="menu-nav"><Link to="/"><span><img className="menu-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589550539/Thrive/home_fzxgrq.png" alt="Login Logo"></img> Home</span></Link></Dropdown.Item>
            <Dropdown.Item as="button" className="menu-nav"><Link to="/login"><span><img className="menu-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589492993/Thrive/user_nh52qw.png" alt="Login Logo"></img> Login</span></Link></Dropdown.Item>
            <Dropdown.Item as="button" className="menu-nav"><Link to="/tasks"><span><img className="menu-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589551787/Thrive/add_mp0bp7.png" alt="Login Logo"></img> Tasks</span></Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>      
    </div>
    );
}


