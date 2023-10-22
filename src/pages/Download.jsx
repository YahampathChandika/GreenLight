import React, { useRef } from "react";
import "../assets/scss/Download.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import WindShield from "../components/vehicleDetails/WindShield";
import Hood from "../components/vehicleDetails/Hood";
import Grill from "../components/vehicleDetails/Grill";

const Download = () => {
  const pdfRef = useRef(null);

  const handleGeneratePDF = async () => {
    const pdfRefElement = pdfRef.current;
    const pdf = new jsPDF("p", "mm", "a4");

    const componentsToPrint = [
      "WindShield",
      "Hood",
      "Grill",
      "FrontBumper",
      "FrontLightings",
      "RearLightings",
    ];

    for (const component of componentsToPrint) {
      const canvas = await html2canvas(pdfRefElement);
      const imageData = canvas.toDataURL("image/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight);

      pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);

      if (component !== componentsToPrint[componentsToPrint.length - 1]) {
        pdf.addPage();
      }
    }

    pdf.save("test.pdf");
  };

  return (
    <div className="download-page">
      <div className="background-image" />
      <div className="download-page-con">
        <h1>Click to Download...</h1>
        <button
          onClick={handleGeneratePDF}
          className="btn btn-primary download-button"
        >
          Download
        </button>
      </div>
      <div style={{ position: "absolute", left: "-9999px" }} ref={pdfRef}>
        {/* Render each component separately */}
        <WindShield />
        <Hood />
        <Grill />
      </div>
    </div>
  );
};

export default Download;
