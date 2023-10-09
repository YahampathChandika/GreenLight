import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WindShield from './components/vehicleDetails/WindShield';
import Hood from './components/vehicleDetails/Hood';
import Home from './pages/Home';
import Grill from './components/vehicleDetails/Grill';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/windShield" element={<WindShield />} />
        <Route path="/hood" element={<Hood />} />
        <Route path="/grill" element={<Grill />} />
      </Routes>
    </Router>
  );
}

export default App;
