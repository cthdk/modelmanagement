import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from './Components/Navbar';
import { Model } from './Components/Model';
import { Manager } from './Components/Manager';
import { Job } from './Components/Job';
import { Login } from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-new-model" element={<Model />} />
            <Route path="/create-new-manager" element={<Manager />} />
            <Route path="/create-new-job" element={<Job />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;