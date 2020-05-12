import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/header.css"

export default function Header() {
    return (
    <div class="background-header">
        <h1>Thrive</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/secret">Secret</Link></li>
        </ul>
    </div>
    );
}