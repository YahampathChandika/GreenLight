import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/scss/VisualInspection.css";
import { useForm, Controller } from "react-hook-form";

function RoadTest() {
  const { register, handleSubmit, control, setValue } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, `data` contains the form field values
    console.log("data", data);

    // Save the form data to local storage
    localStorage.setItem("RoadTestdData", JSON.stringify(data));
  };

  useEffect(() => {
    // Load saved data from local storage
    const savedData = localStorage.getItem("RoadTestdData");
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
  const ratingOptions = [
    { label: "Good", color: "green" },
    { label: "Normal", color: "yellow" },
    { label: "NR", color: "red" },
    { label: "NA", color: "gray" },
  ];

  useEffect(() => {
    const savedRatings = localStorage.getItem("RoadTest");
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
    localStorage.setItem("RoadTest", JSON.stringify(updatedRatings));
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
  const clearAttributeRating = (attribute) => {
    // Clear the rating for the specified attribute
    const updatedRatings = { ...attributeRatings };
    delete updatedRatings[attribute];
    setAttributeRatings(updatedRatings);
    localStorage.setItem("WindShieldRatings", JSON.stringify(updatedRatings));
  };

  // Sample data for your table
  const data = [
    { id: 1, attribute: "O D O meter" },
    { id: 2, attribute: "RPM Meter" },
    { id: 3, attribute: "Steering wheel position" },
    { id: 4, attribute: "Wheel allignment / Side pulling" },
    { id: 5, attribute: "Brake efficency" },
    { id: 6, attribute: "No CV joint noise" },
    { id: 7, attribute: "Vehicle pickup" },
    { id: 8, attribute: "Clutch function" },
    { id: 9, attribute: "Auto gear shifting" },
    { id: 10, attribute: "No wheel bearing or gear noise" },
    { id: 11, attribute: "4WD operation" },
    { id: 12, attribute: "Power steering function" },
    { id: 13, attribute: "No suspension noises" },
    { id: 14, attribute: "Radiator fan on 97°C to 80°C" },
    { id: 15, attribute: "Wheel speed sensor data" },
  ];

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
            <p> Road Test </p>
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
                    <th
                      scope="row"
                      onClick={() => clearAttributeRating(item.attribute)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.id}
                    </th>{" "}
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
                          <div
                            className={`rating-label ${option.label.toLowerCase()}`}
                          >
                            {attributeRatings[item.attribute] ===
                            option.label ? (
                              <FontAwesomeIcon icon={faXmark} />
                            ) : (
                              ""
                            )}
                          </div>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="content-bot" style={{ marginTop: "50px" }}>
              <div className="vi-content-bot-left">
                <div className="vi-content-bot-input">
                  <label> Dowel clutch odd clutch tem</label>
                  <input
                    type="text"
                    name="odd-clutch"
                    id="odd-clutch"
                    {...register("Full-data-report")}
                  />
                </div>
              </div>
              <div className="vi-content-bot-right">
                <div className="vi-content-bot-input-right">
                  <label> Dowel clutch even clutch tem</label>
                  <input
                    type="text"
                    name="even-clutch"
                    id="even-clutch"
                    {...register("even-clutch")}
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-success"
              type="submit"
              style={{ width: "150px", marginTop: "20px" }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RoadTest;
