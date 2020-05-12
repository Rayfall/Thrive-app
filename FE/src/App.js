import React, { useState, createContext, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Secret from './Pages/Secret';
import Login from './Pages/Login';
import { secret } from './api/api-helper'
import './Styles/App.css';

export const DataContext = createContext();

export default function App() {
  const [secretCode, setSecretCode] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await secret();
      setSecretCode(resp);
    }
    makeAPICall();
  }, []);
  
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <Header />
        </header>
        <main>
          <Switch>
            <DataContext.Provider value={{secretCode}}>
              <Route path="/secret" render={() => <Secret/>} />
            </DataContext.Provider>
            <Route path="/" exact component={Home}/>            
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
