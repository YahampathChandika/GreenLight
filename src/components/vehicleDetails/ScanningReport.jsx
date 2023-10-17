import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";

function ScanningReport() {
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

  // Sample data for your table
  const data = [
    { id: 1, attribute: "No trouble cord" },
    { id: 2, attribute: "Air temporature sensor" },
    { id: 3, attribute: "Map / Air flow sensor" },
    { id: 4, attribute: "Knock sensor" },
    { id: 5, attribute: "Engine coolent temperature sensor" },
    { id: 6, attribute: "O2 sensor 1" },
    { id: 7, attribute: "O2 sensor 2" },
    { id: 8, attribute: "Throttle position sensor" },
    { id: 9, attribute: "Accelarator paddle sensor" },
    { id: 10, attribute: "Power steering load sensor" },
    { id: 11, attribute: "Break switch sensor" },
    { id: 12, attribute: "A/C switch and clutch" },
    { id: 13, attribute: "Reverse gear switch sensor" },
    { id: 14, attribute: "12V battery voltage" },
    { id: 15, attribute: "Electric load" },
    { id: 16, attribute: "Engine RPM" },
    { id: 17, attribute: "Fuel injection time" },
  ];

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
            <p>Scanning Report Main Data Monitor Engine</p>
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
          <div className="vi-content-bot">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Attribute Name</th>
                  <th scope="col">Good</th>
                  <th scope="col">Normal</th>
                  <th scope="col">Bad</th>
                  <th scope="col">N/A</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td style={{ paddingLeft: "50px", width: "35%" }}>
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
        <button type="button" className="btn btn-primary next-btn">
          Next
        </button>
      </div>
    </div>
  );
}

export default ScanningReport;
