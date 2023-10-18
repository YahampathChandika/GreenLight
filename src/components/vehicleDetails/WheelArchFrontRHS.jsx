import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";

function WheelArchFrontRHS() {
  const ratingOptions = [
    { label: "Good", color: "green" },
    { label: "Normal", color: "yellow" },
    { label: "NR", color: "red" },
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
      console.error("No file selected.");
    }
  };

  const handleDeleteImage = () => {
    setFile(null); // Clear the uploaded image
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
    { id: 13, attribute: "Corrosion" },
    { id: 14, attribute: "Wheel fender" },
    { id: 15, attribute: "Rubber bleading" },
    { id: 16, attribute: "Alloy wheel rim" },
    { id: 17, attribute: "Standard rim" },
    { id: 18, attribute: "Tyre pressure" },
    { id: 19, attribute: "Tyre damage" },
    { id: 20, attribute: "Tyre thread depth" },
    { id: 21, attribute: "Manifacture depth" },
    { id: 22, attribute: "Tyre match with correct size" },
    { id: 23, attribute: "Wheel match with correct size" },
    { id: 24, attribute: "Side weare (Uneven weare)" },
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

export default WheelArchFrontRHS;
