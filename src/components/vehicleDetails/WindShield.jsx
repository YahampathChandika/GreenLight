import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/VisualInspection.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WindShield() {
  const ratingOptions = [
    { label: "Good", color: "green" },
    { label: "Normal", color: "yellow" },
    { label: "NR", color: "red" },
    { label: "NA", color: "gray" },
  ];

  useEffect(() => {
    const savedRatings = localStorage.getItem("WindShieldRatings");
    const savedImages =
      JSON.parse(localStorage.getItem("WindShieldImages")) || [];

    if (savedRatings) {
      setAttributeRatings(JSON.parse(savedRatings));
    }
    if (savedImages) {
      setFiles(savedImages);
    }
  }, []);

  const [attributeRatings, setAttributeRatings] = useState({});
  const [files, setFiles] = useState([]);

  const handleRatingChange = (attribute, rating) => {
    const updatedRatings = { ...attributeRatings, [attribute]: rating };
    setAttributeRatings(updatedRatings);
    localStorage.setItem("WindShieldRatings", JSON.stringify(updatedRatings));
  };

  const clearAttributeRating = (attribute) => {
    // Clear the rating for the specified attribute
    const updatedRatings = { ...attributeRatings };
    delete updatedRatings[attribute];
    setAttributeRatings(updatedRatings);
    localStorage.setItem("WindShieldRatings", JSON.stringify(updatedRatings));
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const fileURLs = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const objectURL = URL.createObjectURL(selectedFiles[i]);
      fileURLs.push(objectURL);
    }

    // Save the updated images to local storage
    const updatedFiles = [...files, ...fileURLs];
    localStorage.setItem("WindShieldImages", JSON.stringify(updatedFiles));
    setFiles(updatedFiles);
  };

  const handleDeleteImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);

    // Update local storage with the new image URLs
    localStorage.setItem("WindShieldImages", JSON.stringify(updatedFiles));
    setFiles(updatedFiles);
  };

  const data = [
    { id: 1, attribute: "Original" },
    { id: 2, attribute: "No evidence of major damage" },
    { id: 3, attribute: "No scratches" },
    { id: 4, attribute: "No mineral deposit / Acid rain damage" },
    { id: 5, attribute: "Wiper blade" },
    { id: 6, attribute: "Wiper spindles" },
    { id: 7, attribute: "Wiper arms" },
  ];

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        <div className="vi-content">
          <div className="vi-content-top">
            <p>Wind Shield</p>

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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindShield;
