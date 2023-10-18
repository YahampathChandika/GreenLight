import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";
import "../../assets/scss/MainDateMonittorHybrid.css";

function MainDataMonitorHybrid() {
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

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        {/* <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}
        <div className="vi-content">
          <div className="vi-content-top">
            <p> Main Data Monitor Hybrid </p>
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
          <div className="content-bot">
            <div className="vi-content-bot-left">
              <div className="vi-content-bot-input">
                <label> No table cord</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input">
                <label>HV Battery minimum cell voltage</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input">
                <label> HV Battery module minimum temparatur</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input">
                <label>HV Battery usable capacity</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input">
                <label>S.O.C After IO-OR</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input">
                <label>Staters of change minimum</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input">
                <label>Travel milage</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input">
                <label>Travel milage after troble hapended</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
            </div>

            <div className="vi-content-bot-right">
              <div className="vi-content-bot-input-right">
                <label> HV Battery maximum cell voltage</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input-right">
                <label> HV Battery module maximum temparature</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input-right">
                <label> HV total voltage</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input-right">
                <label>S.O.C</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input-right">
                <label>Staters of change maximum</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input-right">
                <label>Travel milage After battry removed</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
              <div className="vi-content-bot-input-right">
                <label> Full data report</label>
                <input type="text" name="table-cord" id="table-cord" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDataMonitorHybrid;
