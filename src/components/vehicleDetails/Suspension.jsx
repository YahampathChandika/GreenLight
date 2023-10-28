import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/scss/VisualInspection.css";
import { CheckPicker } from "rsuite";

function Suspension() {
  // const ratingOptions = [
  //   { label: "Good", color: "green" },
  //   { label: "Normal", color: "yellow" },
  //   { label: "NR", color: "red" },
  //   { label: "NA", color: "gray" },
  // ];

  useEffect(() => {
    const savedSelectedOptions = localStorage.getItem("Suspension");
    if (savedSelectedOptions) {
      setSelectedOptions(JSON.parse(savedSelectedOptions));
    }
  }, []);

  const [selectedOptions, setSelectedOptions] = useState([]);
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

  // Sample data for your table
  const data = [
    { id: 1, attribute: "Shocks and shock mount" },
    { id: 2, attribute: "Stabalizer links" },
    { id: 3, attribute: "Stabalizer bar bushes" },
    { id: 4, attribute: "Steering rack" },
    { id: 5, attribute: "Lower arm ball joints and bushes" },
    { id: 6, attribute: "Upper arm ball joints and bushes" },
    { id: 7, attribute: "Caliper pins" },
    { id: 8, attribute: "Tie bar bushes" },
    { id: 9, attribute: "Coil springs / leaf springs" },
    { id: 10, attribute: "Wheel bearing" },
    { id: 11, attribute: "Tyres" },
    { id: 12, attribute: "Steering linkages and rods" },
  ].map((item) => ({ label: item.attribute, value: item.id }));

  const handleSelect = (values) => {
    setSelectedOptions(values);
    localStorage.setItem("Suspension", JSON.stringify(values));
  };

  let count = 1;

  return (
    <div className="vi-main-con">
      <div className="vi-main-content">
        {/* <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        <div className="vi-content">
          <div className="vi-content-top">
            <p>Suspension</p>
            <CheckPicker className="check-picker"
              data={data}
              onChange={handleSelect}
              value={selectedOptions}
              searchable={false}
              placeholder="Select Options"
              style={{ width: "100%" }}
              countable={false}
            />
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
                  <th
                    scope="col"
                    style={{ textAlign: "left", paddingLeft: "10%" }}
                  >
                    Attribute Name
                  </th>
                  {/* <th scope="col">Select</th> */}
                  {/* <th scope="col">Normal</th>
                  <th scope="col">N/R</th>
                  <th scope="col">N/A</th> */}
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => selectedOptions.includes(item.value))
                  .map((item) => (
                    <tr key={item.value}>
                      <td style={{ textAlign: "center", width: "40%" }}>
                        {count++}
                      </td>
                      <td style={{ textAlign: "left", paddingLeft: "10%" }}>
                        {item.label}
                      </td>
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

export default Suspension;
