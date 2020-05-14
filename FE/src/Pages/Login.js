import React, {useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { createUser, authenticateUser } from "../api/api-helper";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        //createUser(email, password);
        authenticateUser(email, password);
        console.log('Authentication coming soon!');
        console.log("Email: ", email);
        console.log("Password: ", password);
        history.push("/home");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <input 
                    type="email"
                    name="email"
                    value = {email}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Enter Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value = {password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}