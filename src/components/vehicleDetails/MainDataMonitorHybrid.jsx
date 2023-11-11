import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";
import "../../assets/scss/MainDateMonittorHybrid.css";
import { useForm, Controller } from "react-hook-form";

function MainDataMonitorHybrid({ hideButtons }) {
  const { register, handleSubmit, control, setValue } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, `data` contains the form field values
    console.log("data", data);

    // Save the form data to local storage
    localStorage.setItem("MainDataMonitorHybridData", JSON.stringify(data));
  };

  useEffect(() => {
    // Load saved data from local storage
    const savedData = localStorage.getItem("MainDataMonitorHybridData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Set form field values from local storage
      for (const key in parsedData) {
        if (parsedData.hasOwnProperty(key)) {
          setValue(key, parsedData[key]);
        }
      }
    }
  }, [setValue]);
  // Create a state to store the selected image files and their URLs
  const [files, setFiles] = useState([]);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const fileURLs = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const objectURL = URL.createObjectURL(selectedFiles[i]);
      fileURLs.push(objectURL);
    }

    setFiles([...files, ...fileURLs]);
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
              {/* <div className="vi-content-top-btns">
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
              </div> */}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="content-bot">
              <div className="vi-content-bot-left">
                <div className="vi-content-bot-input">
                  <label> No trouble cord</label>
                  <input
                    type="text"
                    name="table-cord"
                    id="table-cord"
                    {...register("table-cord")}
                  />
                </div>
                <div className="vi-content-bot-input">
                  <label>HV Battery minimum cell voltage</label>
                  <input
                    type="text"
                    name="HV-Battery-minimum-cell-voltaged"
                    id="HV-Battery-minimum-cell-voltage"
                    {...register("HV-Battery-minimum-cell-voltage")}
                  />
                </div>
                <div className="vi-content-bot-input">
                  <label> HV Battery module minimum temparature</label>
                  <input
                    type="text"
                    name="HV-Battery-module-minimum-temparatur"
                    id="HV-Battery-module-minimum-temparatur"
                    {...register("HV-Battery-module-minimum-temparatur")}
                  />
                </div>
                <div className="vi-content-bot-input">
                  <label>HV Battery usable capacity</label>
                  <input
                    type="text"
                    name="HV-Battery-usable-capacity"
                    id="HV-Battery-usable-capacity"
                    {...register("HV-Battery-usable-capacity")}
                  />
                </div>
                <div className="vi-content-bot-input">
                  <label>S.O.C After IO-OR</label>
                  <input
                    type="text"
                    name="SOC-After-IO-OR"
                    id="SOC-After-IO-OR"
                    {...register("SOC-After-IO-OR")}
                  />
                </div>
                <div className="vi-content-bot-input">
                  <label>Staters of change minimum</label>
                  <input
                    type="text"
                    name="Staters-of-change-minimum"
                    id="Staters-of-change-minimum"
                    {...register("Staters-of-change-minimum")}
                  />
                </div>
                <div className="vi-content-bot-input">
                  <label>Travel milage</label>
                  <input
                    type="text"
                    name="Travel-milage"
                    id="Travel-milage"
                    {...register("Travel-milage")}
                  />
                </div>
                <div className="vi-content-bot-input">
                  <label>Travel milage after troble hapended</label>
                  <input
                    type="text"
                    name="Travel-milage-after-troble-hapended"
                    id="Travel-milage-after-troble-hapendedd"
                    {...register("Travel-milage-after-troble-hapendedd")}
                  />
                </div>
              </div>
              <div className="vi-content-bot-right">
                <div className="vi-content-bot-input-right">
                  <label>HV Battery maximum cell voltage</label>
                  <input
                    type="text"
                    name="HV-Battery-maximum-cell-voltage"
                    id="HV-Battery-maximum-cell-voltage"
                    {...register("HV-Battery-maximum-cell-voltage")}
                  />
                </div>
                <div className="vi-content-bot-input-right">
                  <label>HV Battery module maximum temparature</label>
                  <input
                    type="text"
                    name="HV-Battery-module-maximum-temparature"
                    id="HV-Battery-module-maximum-temparature"
                    {...register("HV-Battery-module-maximum-temparature")}
                  />
                </div>
                <div className="vi-content-bot-input-right">
                  <label> HV total voltage</label>
                  <input
                    type="text"
                    name="HV-total-voltage"
                    id="HV-total-voltage"
                    {...register("HV-total-voltage")}
                  />
                </div>
                <div className="vi-content-bot-input-right">
                  <label>S.O.C</label>
                  <input type="text" name="SOC" id="SOC" {...register("SOC")} />
                </div>
                <div className="vi-content-bot-input-right">
                  <label>Staters of change maximum</label>
                  <input
                    type="text"
                    name="Staters-of-change-maximum"
                    id="Staters-of-change-maximum"
                    {...register("Staters-of-change-maximum")}
                  />
                </div>
                <div className="vi-content-bot-input-right">
                  <label>Travel milage After battry removed</label>
                  <input
                    type="text"
                    name="Travel-milage-After-battry-removed"
                    id="Travel-milage-After-battry-removed"
                    {...register("Travel-milage-After-battry-removed")}
                  />
                </div>
                <div className="vi-content-bot-input-right">
                  <label> Full data report</label>
                  <input
                    type="text"
                    name="Full-data-report"
                    id="Full-data-report"
                    {...register("Full-data-report")}
                  />
                </div>
                {!hideButtons && (
                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ width: "150px", marginTop: "20px" }}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainDataMonitorHybrid;
