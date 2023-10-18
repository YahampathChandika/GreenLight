import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";

function WheelArchRearLHS() {
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
    { id: 1, attribute: "Corrosion" },
    { id: 2, attribute: "Wheel fender" },
    { id: 3, attribute: "Rubber bleading" },
    { id: 4, attribute: "Alloy wheel rim" },
    { id: 5, attribute: "Standard rim" },
    { id: 6, attribute: "Tyre pressure" },
    { id: 7, attribute: "Tyre damage" },
    { id: 8, attribute: "Tyre thread depth" },
    { id: 9, attribute: "Manifacture depth" },
    { id: 10, attribute: "Tyre match with correct size" },
    { id: 11, attribute: "Wheel match with correct size" },
    { id: 12, attribute: "Side weare (Uneven weare)" },
    { id: 1, attribute: "Corrosion" },
    { id: 2, attribute: "Wheel fender" },
    { id: 3, attribute: "Rubber bleading" },
    { id: 4, attribute: "Alloy wheel rim" },
    { id: 5, attribute: "Standard rim" },
    { id: 6, attribute: "Tyre pressure" },
    { id: 7, attribute: "Tyre damage" },
    { id: 8, attribute: "Tyre thread depth" },
    { id: 9, attribute: "Manifacture depth" },
    { id: 10, attribute: "Tyre match with correct size" },
    { id: 11, attribute: "Wheel match with correct size" },
    { id: 12, attribute: "Side weare (Uneven weare)" },
  ];

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        {/* <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        <div className="vi-content">
          <div className="vi-content-top">
            <p>Check with Engine Start</p>
            <div className="vi-content-top-img-con">
              <div className="vi-content-top-btns">
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
                                  attributeRatings[item.attribute] ===
                                  option.label
                                }
                                onChange={() =>
                                  handleRatingChange(
                                    item.attribute,
                                    option.label
                                  )
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
            {/* <button type="button" className="btn btn-primary next-btn">
          Next
        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WheelArchRearLHS;
