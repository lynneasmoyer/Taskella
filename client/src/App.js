import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import AddTask from './views/AddTask';
import Dashboard from './views/Dashboard';
import TodaysTasks from './views/TodaysTasks'


import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
          <Main path="/"/>
          <AddTask path="task/add" />
          <Dashboard path="/tasks" />
          <TodaysTasks path="/today"/>
        </Router>
    </div>
  );
};
export default App;