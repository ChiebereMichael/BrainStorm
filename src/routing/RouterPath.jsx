import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Signup from '../pages/Signup';

function RouterPath() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default RouterPath