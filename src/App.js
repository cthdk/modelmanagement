import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import { Model } from './Pages/Model';
import { Manager } from './Pages/Manager';
import { Jobs } from './Pages/Jobs';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { MyJobs } from './Pages/MyJobs';
import { JobDetails } from './Pages/JobDetails';
import { NotFound } from './Layout/NotFound';


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
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/jobs/:jobId" element={<JobDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;