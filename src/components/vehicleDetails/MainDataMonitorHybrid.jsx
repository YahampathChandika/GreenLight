import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";
import "../../assets/scss/MainDateMonittorHybrid.css";

function MainDataMonitorHybrid() {
  const ratingOptions = [
    { label: "Good", color: "green" },
    { label: "Normal", color: "yellow" },
    { label: "Bad", color: "red" },
    { label: "NA", color: "gray" },
  ];

  // Create a state to keep track of the selected rating for each attribute
  const [attributeRatings, setAttributeRatings] = useState({});
  const [file, setFile] = useState();

  // Function to handle changes in attribute ratings
  const handleRatingChange = (attribute, rating) => {
    setAttributeRatings({ ...attributeRatings, [attribute]: rating });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setFile(objectURL);
    } else {
      console.error("No file selected.");
    }
  };

  const handleDeleteImage = () => {
    setFile(null); // Clear the uploaded image
  };

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="vi-content">
          <div className="vi-content-top">
            <p> Main Data Monitor Hybrid </p>
            <div className="vi-content-top-img-con">
              <div className="vi-content-top-btns">
                <label className="btn btn-secondary">
                  Upload File
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/gif"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </label>
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
              <div className="vi-content-top-img">
                {file && <img src={file} alt="Uploaded" />}
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
