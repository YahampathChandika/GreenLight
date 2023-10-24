import React, { useState } from "react";
import "../../assets/scss/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomerDetails() {
  const [selectedFiles, setSelectedFiles] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);
  const labels = [
    "Mileage",
    "Frame No",
    "Certificate of Registration",
    "Engine No",
  ];

  const handleFileInputChange = (e, index) => {
    const file = e.target.files[0];
    const updatedSelectedFiles = [...selectedFiles];
    updatedSelectedFiles[index] = file;
    setSelectedFiles(updatedSelectedFiles);
  };

  const openFileUploader = (index) => {
    // Trigger a click on the hidden file input when the FontAwesome icon is clicked.
    document.getElementById(`fileInput${index}`).click();
  };

  return (
    <div>
      <div className="details-main">
        <p>Customer Details</p>
        <div className="details-top">
          <div className="details-top-left">
            <div className="details-input">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="details-input">
              <label>Phone No</label>
              <input type="text" name="phone" />
            </div>
          </div>
          <div className="details-top-right">
            <div className="details-input">
              <label>Email</label>
              <input type="text" name="email" />
            </div>
            <div className="details-input">
              <label>Inspection Location</label>
              <input type="text" name="address" />
            </div>
          </div>
        </div>
        <div className="details-mid">
          <p>Vehicle Details</p>
          <div className="details-mid-con">
            <div className="details-mid-con-left">
              <div className="details-input">
                <label>Vehicle No.</label>
                <input type="text" />
              </div>
              <div className="details-input">
                <label>Make</label>
                <input type="text" />
              </div>
              <div className="details-input">
                <label>Transmission</label>
                <input type="text" />
              </div>
              <div className="details-input">
                <label>Transmission</label>
                <input type="text" />
              </div>
            </div>
            <div className="details-mid-con-mid">
              <div className="details-input">
                <label>Manufacture Year</label>
                <input type="text" />
              </div>
              <div className="details-input">
                <label>Model</label>
                <input type="text" />
              </div>
              <div className="details-input">
                <label>Milage</label>
                <input type="text" />
              </div>
            </div>
            <div className="details-mid-con-right">
              <div className="details-input">
                <label>Registration Year</label>
                <input type="text" />
              </div>
              <div className="details-input">
                <label>Fuel Type</label>
                <input type="text" />
              </div>
              <div className="details-input">
                <label>Fuel Type</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="details-bot">
          {[0, 1, 2, 3].map((index) => (
            <div className="details-bot-left" key={index}>
              <div className="details-input-image">
                <label>{labels[index]}</label>
                <input
                  type="file"
                  id={`fileInput${index}`}
                  accept=".jpg, .png, .pdf"
                  onChange={(e) => handleFileInputChange(e, index)}
                  style={{ display: "none" }}
                />
                <input type="text" />
                <span
                  className={`image-icon-${index + 1}`}
                  onClick={() => openFileUploader(index)}
                >
                  <FontAwesomeIcon icon={faImage} />
                </span>
                {selectedFiles[index] && (
                  <p>Selected File: {selectedFiles[index].name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className='details-button'>
         <button type="button" class="btn btn-primary">Next</button>
      </div> */}
        <div
          style={{
            width: "100%",
            marginBottom: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
