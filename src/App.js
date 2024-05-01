import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import { NewModel } from './Components/NewModel';
import { NewManager } from './Components/NewManager';
import { NewJob } from './Components/NewJob';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { AllJobs } from './Components/AllJobs';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/create-new-model" element={<NewModel />} />
            <Route path="/create-new-manager" element={<NewManager />} />
            <Route path="/create-new-job" element={<NewJob />} />
            <Route path="/all-jobs" element={<AllJobs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;