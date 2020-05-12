import React, { useState, createContext, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Secret from './Pages/Secret';
import Login from './Pages/Login';
import { secret, getTasks } from './api/api-helper'
import './Styles/App.css';

export const DataContext = createContext();

export default function App() {
  const [secretCode, setSecretCode] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const makeSecretCall = async () => {
      const resp = await secret();
      setSecretCode(resp);
    }
    const makeTasksCall = async () => {
      const resp = await getTasks();
      setAllTasks(resp);
    }
    console.log(allTasks)
    makeSecretCall();
    makeTasksCall();
  }, []);
  
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <Header />
        </header>
        <main>
          <Switch>
            <DataContext.Provider value={{secretCode, allTasks}}>
              <Route path="/" exact component={Home}/>            
              <Route path="/login" component={Login} />
              <Route path="/secret" render={() => <Secret/>} />
            </DataContext.Provider>                  
          </Switch>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
    </div>
    </Router>    
  );
}
