// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import EducationExperience from './Components/EducationExperience';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App eb-garamond">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education-experience" element={<EducationExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
