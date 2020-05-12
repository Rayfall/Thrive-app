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
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

// Login.jsx
/*

<button onClick={handleSubmit}>ENTER</button>

import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email : '',
        password: ''
      };
    }  handleInputChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value
      });
    }  onSubmit = (event) => {
      event.preventDefault();
      alert('Authentication coming soon!');
    }  render() {
      return (
        <form onSubmit={this.onSubmit}>
          <h1>Login Below!</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
         <input type="submit" value="Submit"/>
        </form>
      );
    }
  }*/