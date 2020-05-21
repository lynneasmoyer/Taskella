import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import AddTask from './views/AddTask';
import Dashboard from './views/Dashboard';

import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
          <Main path="/"/>
          <AddTask path="task/add" />
          <Dashboard path="/tasks" />
        </Router>
    </div>
  );
};
export default App;