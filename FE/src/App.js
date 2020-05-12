import React, { useState, createContext } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './Styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="nav">
        <Header />
      </div>
      <main>
        <Switch>
          <Route path="/" exact component={Home}/>          
        </Switch>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
    </Router>    
  );
}

export default App;
