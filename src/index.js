import React from 'react'
import {createRoot} from "react-dom/client"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Freelances from './pages/Freelances';

const root = document.getElementById('root');
createRoot(root).render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />  
      <Route path="/survey" element={<Survey />} />
      <Route path="/profils" element={<Freelances />} />  
    </Routes>
  </Router>
)
