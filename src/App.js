import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import { Model } from './Components/Model';
import { Manager } from './Components/Manager';
import { Jobs } from './Components/Jobs';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/model" element={<Model />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;