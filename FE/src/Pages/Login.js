import React, {useState, useEffect } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Authentication coming soon!');
        console.log("Email: ", email);
        console.log("Password: ", password);
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