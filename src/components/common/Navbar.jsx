import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../../assets/scss/Navbar.css";
import PDF from "../../pages/Pdf";
import logo from "../../assets/images/greenlight logo.png";

function Navbar() {
  const pdfRef = useRef(null);

  const handleGeneratePDF = async () => {
    const pdfRefElement = pdfRef.current;
    const contentHeight = pdfRefElement.scrollHeight;
    const contentWidth = pdfRefElement.scrollWidth;
    const pdf = new jsPDF("p", "mm", [contentWidth, contentHeight], true);

    // Use html2canvas to capture the content of pdfRef as an image
    html2canvas(pdfRefElement).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const ratio =
        Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight) * 1.5;
      const imgX = (pdfWidth - imageWidth * ratio) / 2;
      const imgY = 20;
      pdf.addImage(imageData, "PNG", 0, 0, contentWidth, contentHeight);

      pdf.save("test.pdf");
    });
  };

  return (
    <div className="navBar">
      <img src={logo} alt="Green Light Logo" className="logo" />
      <p>Green Light</p>
      <button
        type="button"
        className="btn btn-dark print-btn"
        onClick={handleGeneratePDF}
      >
        Download
      </button>
      <div style={{ position: "absolute", left: "-9999px" }} ref={pdfRef}>
        <PDF />
      </div>
    </div>
  );
}
export default Navbar;
