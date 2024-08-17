import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import EducationExperience from './Components/EducationExperience';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import PaperPublications from './Components/PaperPublications';
import AllProjects from './Components/AllProjects';
import Contact from './Components/Contact';
import AllCertificates from './Components/AllCertificates';


function App() {
  return (
    <Router>
      <div className="App eb-garamond">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education-experience" element={<EducationExperience />} />
          <Route path="/education-experience/:id" element={<EducationExperience />} />
          <Route path="/paper-publications" element={<PaperPublications />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<AllProjects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Certificates" element={<AllCertificates />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
