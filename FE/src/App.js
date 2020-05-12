import React, { useState, createContext } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Secret from './Pages/Secret';
import Login from './Pages/Login';
import './Styles/App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/secret" component={Secret} />
            <Route path="/login" component={Login} />      
          </Switch>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
    </div>
    </Router>    
  );
}
