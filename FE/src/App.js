import React, { useState, createContext, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import User from './user-auth/User';
import Group from './user-auth/Group';
import Friends from './user-auth/Friends';
import Task from './Pages/Tasks';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import TestUser from './Pages/testUser';
import TestGroup from './Pages/testGroups';
import TestFriends from './Pages/testFriends';
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
              <Route path="/signup" component={Signup} />
              <Route path="/tasks" render={() => <Task/>} />
              <Route path="/testuser" component={TestUser}/>
              <Route path="/testgroup" component={TestGroup}/>
              <Route path="/testfriends" component={TestFriends}/>
            </DataContext.Provider>
            <DataContext.Provider>
              <Route path="/home/:userid" component={Home}/>
              <Route path="/ufriends/:userid" component={Friends} />
              <Route path="/ugroups/:userid" component={Group} />
              <Route path="/personaluser" render={() => <User/>} />
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
