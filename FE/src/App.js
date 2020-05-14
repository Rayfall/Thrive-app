import React, { useState, createContext, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import User from './Pages/User';
import Login from './Pages/Login';
import { getAllTasks  } from './api/api-helper'
import './Styles/App.css';

export const DataContext = createContext();

export default function App() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const makeTasksCall = async () => {
      const resp = await getAllTasks();
      setAllTasks(resp);
    }
    console.log(allTasks)
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
            <DataContext.Provider value={{allTasks}}>
              <Route path="/" exact component={Home}/>            
              <Route path="/login" component={Login} />
              <Route path="/secret" render={() => <User/>} />
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
