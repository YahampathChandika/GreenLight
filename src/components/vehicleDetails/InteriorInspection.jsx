import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";

function InteriorInspection() {
  const ratingOptions = [
    { label: "Good", color: "green" },
    { label: "Normal", color: "yellow" },
    { label: "NR", color: "red" },
    { label: "NA", color: "gray" },
  ];

  useEffect(() => {
    const savedRatings = localStorage.getItem("attributeRatings");
    if (savedRatings) {
      setAttributeRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Create a state to keep track of the selected ratings for each attribute
  const [attributeRatings, setAttributeRatings] = useState({});

  // Create a state to store the selected image files and their URLs
  const [files, setFiles] = useState([]);

  // Function to handle changes in attribute ratings
  const handleRatingChange = (attribute, rating) => {
    const updatedRatings = { ...attributeRatings, [attribute]: rating };
    setAttributeRatings(updatedRatings);

    // Call the updatePdfData function to update the data in the PDF component
    // updatePdfData("windShieldData", updatedRatings);

    // Save the updated ratings to localStorage
    localStorage.setItem("attributeRatings", JSON.stringify(updatedRatings));
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const fileURLs = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const objectURL = URL.createObjectURL(selectedFiles[i]);
      fileURLs.push(objectURL);
    }

    setFiles([...files, ...fileURLs]);

    // Call the updatePdfData function to update the data in the PDF component
    // updatePdfData("fileURLs", [...files, ...fileURLs]);
  };

  // Function to delete a specific image
  const handleDeleteImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  // Sample data for your table
  const data = [
    { id: 1, attribute: "With smart key" },
    { id: 2, attribute: "Without smart key" },
    { id: 3, attribute: "Remote start" },
    { id: 4, attribute: "Power / window mirror control switcher" },
    { id: 5, attribute: "Power / window control - master switch" },
    { id: 6, attribute: "Power / window control - individual switch" },
    { id: 7, attribute: "Power window system auto function" },
    { id: 8, attribute: "Door lock control master switch" },
    { id: 9, attribute: "Window lock control master switch" },
    { id: 10, attribute: "Baby lock" },
    { id: 11, attribute: "Wiper and wiper washer front" },
    { id: 12, attribute: "Wiper and wiper washer rear" },
    { id: 13, attribute: "Wiper system auto function" },
    { id: 14, attribute: "Lighting system auto function" },
    { id: 15, attribute: "A/C switch and controller" },
    { id: 16, attribute: "A/C vents and adjust" },
    { id: 17, attribute: "A/C system auto function" },
    { id: 18, attribute: "Vehicle hold auto function" },
    { id: 19, attribute: "Doweal A/C" },
    { id: 20, attribute: "Dashboard condition" },
    { id: 22, attribute: "Break pad and disc" },
    { id: 23, attribute: "Horn" },
    { id: 24, attribute: "Steering multi function" },
    { id: 25, attribute: "Steering lock" },
    { id: 26, attribute: "Steering lift and scop" },
    { id: 27, attribute: "Lighter" },
    { id: 28, attribute: "Remote entry system" },
    { id: 29, attribute: "Smart entry system" },
    { id: 30, attribute: "Decklid release mechanical" },
    { id: 31, attribute: "Decklid release only key" },
    { id: 32, attribute: "Decklid release remote" },
    { id: 33, attribute: "Decklid release sensor" },
    { id: 34, attribute: "Fuel cap release mechanical" },
    { id: 35, attribute: "Fuel cap release push button" },
    { id: 36, attribute: "Croos control" },
    { id: 37, attribute: "Paddle shift" },
    { id: 38, attribute: "Seat belts" },
    { id: 39, attribute: "Hand break apply - By hand" },
    { id: 40, attribute: "Hand break apply - By foot" },
    { id: 41, attribute: "Hand break apply - By push button" },
    { id: 42, attribute: "Auto dimming rearview mirror" },
    { id: 43, attribute: "Active park assist" },
    { id: 44, attribute: "Headliner" },
    { id: 45, attribute: "Console area" },
    { id: 46, attribute: "Power adjustable drive seat" },
    { id: 47, attribute: "Manual adjustable drive seat" },
    { id: 48, attribute: "Power adjustable passenger seat" },
    { id: 49, attribute: "Manual adjustable passenger seat" },
    { id: 50, attribute: "Center arm rest front" },
    { id: 51, attribute: "Sun visions vanity mirror and light" },
    { id: 52, attribute: "Head rest adjustment" },
    { id: 53, attribute: "Under front passengers adjustable seat" },
    { id: 54, attribute: "Under front passengers magie seat" },
    { id: 55, attribute: "Rear arm rest" },
    { id: 56, attribute: "Seat cover leather" },
    { id: 57, attribute: "Original car mat set" },
    { id: 58, attribute: "Door lamps" },
    { id: 59, attribute: "Hood lamps" },
    { id: 60, attribute: "Spot lamps" },
    { id: 61, attribute: "Hood lamps" },
    { id: 62, attribute: "Electric seats" },
    { id: 63, attribute: "Hood upholstery" },
    { id: 64, attribute: "Sun wisers" },
    { id: 65, attribute: "Rear view camera" },
    { id: 66, attribute: "Sunroof operation" },
    { id: 67, attribute: "Power outlet" },
  ];

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        {/* <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        <div className="vi-content">
          <div className="vi-content-top">
            <p>Interior Inspection</p>
            <div className="vi-content-top-img-con">
              <div className="vi-content-top-btns">
                <label className="btn btn-secondary">
                  Upload Files
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/gif"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              <div className="vi-content-top-img">
                {files.map((file, index) => (
                  <div key={index} className="image-container">
                    <img src={file} alt="Uploaded" />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(index)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="vi-content-bot">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Attribute Name</th>
                  <th scope="col">Good</th>
                  <th scope="col">Normal</th>
                  <th scope="col">N/R</th>
                  <th scope="col">N/A</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td style={{ paddingLeft: "40px", width: "35%" }}>
                      {item.attribute}
                    </td>
                    {ratingOptions.map((option) => (
                      <td key={option.label}>
                        <label className="select-lbl">
                          <input
                            type="radio"
                            name={`rating-${item.id}-${item.attribute}`}
                            value={option.label}
                            checked={
                              attributeRatings[item.attribute] === option.label
                            }
                            onChange={() =>
                              handleRatingChange(item.attribute, option.label)
                            }
                          />
                          <span
                            className={`rating-color ${option.label.toLowerCase()}`}
                          ></span>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <button type="button" className="btn btn-primary next-btn">Next</button> */}
      </div>
    </div>
  );
}

export default InteriorInspection;
