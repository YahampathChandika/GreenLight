import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WindShield from "./components/vehicleDetails/WindShield";
import Hood from "./components/vehicleDetails/Hood";
import Home from "./pages/Home";
import Grill from "./components/vehicleDetails/Grill";

// import Navbar from './components/common/Navbar'
import CustomerDetails from "./components/customersDetails/CustomerDetails";
import PDF from "./pages/Pdf";
import Download from "./pages/Download";
// import VisualInspection from './components/vehicleDetails/VisualInspection'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customerDetails" element={<CustomerDetails />} />
        <Route path="/pdf" element={<PDF />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
    // <div className="App">
    //  {/* <Navbar/> */}
    //  <CustomerDetails/>
    //  {/* <VisualInspection/> */}
    // </div>
  );
}

export default App;
