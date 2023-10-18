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

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedWindShieldData = localStorage.getItem("windshield");
    const storedBootData = localStorage.getItem("bootData");
    const storedRoofData = localStorage.getItem("roofData");
    console.log("bk", storedWindShieldData);
    if (storedWindShieldData) {
      setPdfData((prevData) => ({
        ...prevData,
        windShieldData: JSON.parse(storedWindShieldData),
      }));
    }

    if (storedBootData) {
      setPdfData((prevData) => ({
        ...prevData,
        bootData: JSON.parse(storedBootData),
      }));
    }

    if (storedRoofData) {
      setPdfData((prevData) => ({
        ...prevData,
        roofData: JSON.parse(storedRoofData),
      }));
    }
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

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
