import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/scss/VisualInspection.css";
import { Dropdown } from "rsuite";

function WheelArchFrontRHS() {
  const ratingOptions = [
    { label: "Good", color: "green" },
    { label: "Normal", color: "yellow" },
    { label: "NR", color: "red" },
    { label: "NA", color: "gray" },
  ];

  useEffect(() => {
    const savedRatings = localStorage.getItem("WheelArchFrontRHS");
    if (savedRatings) {
      setAttributeRatings(JSON.parse(savedRatings));
    }
    const savedDropdownOption = localStorage.getItem("WheelArchFrontRHSTire");
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
    localStorage.setItem("WheelArchFrontRHS", JSON.stringify(updatedRatings));
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
    if (attribute === "WheelArchFrontRHSTire") {
      // Handle the specific case for "WheelArchFrontRHSTire"
      setSelectedItem(null); // or set it to any default value
      localStorage.removeItem("WheelArchFrontRHSTire");
    } else {
      delete updatedRatings[attribute];
      localStorage.setItem("WheelArchFrontRHS", JSON.stringify(updatedRatings));
    }
    setAttributeRatings(updatedRatings);
  };

   // Function to handle dropdown option selection and save it to local storage
   const handleDropdownSelect = (value) => {
    setSelectedItem(value);
    localStorage.setItem("WheelArchFrontRHSTire", value);
  };

  // Sample data for your table
  const data = [
    { id: 1, attribute: "Corrosion" },
    { id: 2, attribute: "Wheel fender" },
    { id: 3, attribute: "Rubber bleading" },
    { id: 4, attribute: "Alloy wheel rim" },
    { id: 5, attribute: "Standard rim" },
    { id: 6, attribute: "Tyre pressure" },
    { id: 7, attribute: "Tyre damage" },
    { id: 8, attribute: "Manufacture Date" },
    { id: 9, attribute: "Tyre match with correct size" },
    { id: 10, attribute: "Wheel match with correct size" },
    { id: 11, attribute: "Side weare (Uneven weare)" },
    { id: 12, attribute: "Tire Tread Depth Quality" },
  ];

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        {/* <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        <div className="vi-content">
          <div className="vi-content-top">
            <p>Wheel Arch Front R/H/S</p>
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
                  <th onClick={() =>
                      clearAttributeRating("WheelArchFrontRHSTire")
                    }>13</th>
                  <td colSpan={1}>
                    <span style={{ fontWeight: "500", paddingLeft: "30px" }}>
                      Tire Tread Depth
                    </span>
                  </td>
                  <td colSpan={4} style={{ textAlign: "center" }}>
                    <Dropdown
                      title={selectedItem || "Tire Tread Depth"}
                      placement="topStart"
                      onSelect={handleDropdownSelect}
                      className="wheel-drop-dropdown"
                    >
                      <div style={{ width: "250px" }}>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="8mm Good"
                        >
                          8mm Good
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="7mm Good"
                        >
                          7mm Good
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="6mm Good"
                        >
                          6mm Good
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="5mm Ok"
                        >
                          5mm Ok
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="4mm Ok"
                        >
                          4mm Ok
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="3mm Inspect Monthly"
                        >
                          3mm Inspect Monthly
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="2mm Won't Last Long"
                        >
                          2mm Won't Last Long
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="wheel-drop-item"
                          eventKey="1.66mm Legal Limit"
                        >
                          1.66mm Legal Limit
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

export default WheelArchFrontRHS;
