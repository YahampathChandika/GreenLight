import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/VisualInspection.css";
import Boot from "../components/vehicleDetails/BootSpace";
import Roof from "../components/vehicleDetails/CheckWithEngineStart";
import WindShield from "../components/vehicleDetails/WindShield";

function PDF() {
  // Define state to store user selections and file URLs
  const [pdfData, setPdfData] = useState({
    windShieldData: {},
    bootData: {},
    roofData: {},
    fileURLs: [],
  });

  // Function to update the PDF data
  const updatePdfData = (component, data) => {
    setPdfData((prevData) => ({
      ...prevData,
      [component]: data,
    }));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Report</h1>
      <WindShield updatePdfData={updatePdfData} />
      <Boot />
      <Roof />
    </>
  );
}

export default PDF;
