import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/scss/VisualInspection.css";
import { Dropdown } from "rsuite";

function ScanningReport() {
  const ratingOptions = [
    { label: "Good", color: "green" },
    { label: "Normal", color: "yellow" },
    { label: "NR", color: "red" },
    { label: "NA", color: "gray" },
  ];

  useEffect(() => {
    const savedRatings = localStorage.getItem("ScanningReport");
    if (savedRatings) {
      setAttributeRatings(JSON.parse(savedRatings));
    }
    const savedDropdownOption = localStorage.getItem("ScanningReportBattery");
    if (savedDropdownOption) {
      setSelectedItem(savedDropdownOption);
    }
  }, []);

  const [attributeRatings, setAttributeRatings] = useState({});
  const [files, setFiles] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle changes in attribute ratings
  const handleRatingChange = (attribute, rating) => {
    const updatedRatings = { ...attributeRatings, [attribute]: rating };
    setAttributeRatings(updatedRatings);
    localStorage.setItem("ScanningReport", JSON.stringify(updatedRatings));
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

  const clearAttributeRating = (attribute) => {
    // Clear the rating for the specified attribute
    const updatedRatings = { ...attributeRatings };

    if (attribute === "ScanningReportBattery") {
      // Handle the specific case for "ScanningReportBattery"
      setSelectedItem(null); // or set it to any default value
      localStorage.removeItem("ScanningReportBattery");
    } else {
      delete updatedRatings[attribute];
      localStorage.setItem("ScanningReport", JSON.stringify(updatedRatings));
    }

    setAttributeRatings(updatedRatings);
  };

  // Function to handle dropdown option selection and save it to local storage
  const handleDropdownSelect = (value) => {
    setSelectedItem(value);
    localStorage.setItem("ScanningReportBattery", value);
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
    { id: 14, attribute: "Electric load" },
    { id: 15, attribute: "Engine RPM" },
    { id: 16, attribute: "Fuel injection time" },
    { id: 17, attribute: "12 V Battery voltage quality" },
  ];

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        {/* <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        <div className="vi-content">
          <div className="vi-content-top">
            <p>Scanning Report</p>
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
                    </th>
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
                <tr>
                  <th onClick={() => clearAttributeRating("ScanningReportBattery")}>
                    18
                  </th>
                  <td colSpan={1}>
                    <span style={{ fontWeight: "500", paddingLeft: "30px" }}>
                      12 V Battery Voltage
                    </span>
                  </td>
                  <td colSpan={4} style={{ textAlign: "center" }}>
                    <Dropdown
                      title={selectedItem || "Select an option"}
                      placement="topStart"
                      onSelect={handleDropdownSelect}
                      className="wheel-drop-dropdown"
                    >
                      <div style={{ width: "250px" }}>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="12.60+ V | 100%"
                        >
                          12.60+ V | 100%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="12.50 V | 90%"
                        >
                          12.50 V | 90%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="12.42 V | 80%"
                        >
                          12.42 V | 80%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="12.32 V | 70%"
                        >
                          12.32 V | 70%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="12.20 V | 60%"
                        >
                          12.20 V | 60%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="12.06 V | 50%"
                        >
                          12.06 V | 50%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="11.90 V | 40%"
                        >
                          11.90 V | 40%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="11.75 V | 30%"
                        >
                          11.75 V | 30%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="11.58 V | 20%"
                        >
                          11.58 V | 20%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="11.31 V | 10%"
                        >
                          11.31 V | 10%
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="10.50 V | 0%"
                        >
                          10.50 V | 0%
                        </Dropdown.Item>
                      </div>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanningReport;
