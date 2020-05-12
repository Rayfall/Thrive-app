import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
    <div className="background-header">
        <h1>Thrive</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/secret">Secret</Link></li>
        </ul>
    </div>
    );
}