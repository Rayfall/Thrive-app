import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Styles/home.css'

import { DataContext } from "../App";

export default function Home() {
    return (
    <div className="home-styles">
        <h2>It's Time to Thrive!</h2>
        <p>If you haven't already, please log in using the <span><img className="sign-img" src="https://res.cloudinary.com/aetherfall/image/upload/v1589492993/Thrive/user_nh52qw.png" alt="Login Logo"></img></span></p>
        <p>Otherwise, please click here to register: <Link to="/signup">Sign-Up</Link></p>
    </div>
    )
}