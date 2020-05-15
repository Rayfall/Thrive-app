import React, {useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { createUser, authenticateUser } from "../api/api-helper";

export default function Signup() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        authenticateUser(email, password);
        createUser(email, password, firstname, lastname);        
        history.push("/home");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create New User</h1>
                <input 
                    type="name"
                    name="name"
                    value = {firstname}
                    onChange={e => setFirstName(e.target.value)} 
                    placeholder="Enter First Name"
                    required
                />
                <input 
                    type="name"
                    name="name"
                    value = {lastname}
                    onChange={e => setLastName(e.target.value)} 
                    placeholder="Enter Last Name"
                    required
                />
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