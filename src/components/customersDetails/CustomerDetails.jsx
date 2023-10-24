import React, { useState, useEffect } from "react";
import "../../assets/scss/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomerDetails() {
  const [mileageFiles, setMileageFiles] = useState([]);
  const [frameNoFiles, setFrameNoFiles] = useState([]);
  const [registrationFiles, setRegistrationFiles] = useState([]);
  const [engineFiles, setEngineFiles] = useState([]);

  useEffect(() => {
    // Load images from local storage on component mount
    const storedMileageFiles = JSON.parse(localStorage.getItem("mileageFiles"));
    const storedFrameNoFiles = JSON.parse(localStorage.getItem("frameNoFiles"));
    const storedRegistrationFiles = JSON.parse(
      localStorage.getItem("registrationFiles")
    );
    const storedEngineFiles = JSON.parse(localStorage.getItem("engineFiles"));

    if (storedMileageFiles) {
      setMileageFiles(storedMileageFiles);
    }

    if (storedFrameNoFiles) {
      setFrameNoFiles(storedFrameNoFiles);
    }

    if (storedRegistrationFiles) {
      setRegistrationFiles(storedRegistrationFiles);
    }

    if (storedEngineFiles) {
      setEngineFiles(storedEngineFiles);
    }
  }, []);

  const saveToLocalStorage = () => {
    // Save images to local storage
    localStorage.setItem("mileageFiles", JSON.stringify(mileageFiles));
    localStorage.setItem("frameNoFiles", JSON.stringify(frameNoFiles));
    localStorage.setItem(
      "registrationFiles",
      JSON.stringify(registrationFiles)
    );
    localStorage.setItem("engineFiles", JSON.stringify(engineFiles));
  };

  const handleFileChange = (e, field) => {
    const selectedFiles = e.target.files;
    const fileURLs = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const objectURL = URL.createObjectURL(selectedFiles[i]);
      fileURLs.push(objectURL);
    }

    if (field === "mileage") {
      setMileageFiles([...mileageFiles, ...fileURLs]);
    } else if (field === "frameNo") {
      setFrameNoFiles([...frameNoFiles, ...fileURLs]);
    } else if (field === "registration") {
      setRegistrationFiles([...registrationFiles, ...fileURLs]);
    } else if (field === "engine") {
      setEngineFiles([...engineFiles, ...fileURLs]);
    }
  };

  const handleDeleteImage = (index, field) => {
    if (field === "mileage") {
      const updatedFiles = [...mileageFiles];
      updatedFiles.splice(index, 1);
      setMileageFiles(updatedFiles);
    } else if (field === "frameNo") {
      const updatedFiles = [...frameNoFiles];
      updatedFiles.splice(index, 1);
      setFrameNoFiles(updatedFiles);
    } else if (field === "registration") {
      const updatedFiles = [...registrationFiles];
      updatedFiles.splice(index, 1);
      setRegistrationFiles(updatedFiles);
    } else if (field === "engine") {
      const updatedFiles = [...engineFiles];
      updatedFiles.splice(index, 1);
      setEngineFiles(updatedFiles);
    }
  };

  useEffect(() => {
    // Save images to local storage whenever they change
    saveToLocalStorage();
  }, [mileageFiles, frameNoFiles, registrationFiles, engineFiles]);

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
          <div className="details-bot-inputs">
            <div className="bot-input">
              <label>Milage</label>
              <input type="text" />
              <div className="customer-img-con">
                <div className="customer-btns">
                  <label className="btn btn-secondary">
                    Image
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/gif"
                      multiple
                      onChange={(e) => handleFileChange(e, "mileage")}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div className="customer-img">
                  {mileageFiles.map((file, index) => (
                    <div key={index} className="cus-image-container">
                      <img src={file} alt="Uploaded" />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index, "mileage")}
                        className="btn btn-danger customer-dlt-btn"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bot-input">
              <label>Frame No.</label>
              <input type="text" />
              <div className="customer-img-con">
                <div className="customer-btns">
                  <label className="btn btn-secondary">
                    Image
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/gif"
                      multiple
                      onChange={(e) => handleFileChange(e, "frameNo")}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div className="customer-img">
                  {frameNoFiles.map((file, index) => (
                    <div key={index} className="cus-image-container">
                      <img src={file} alt="Uploaded" />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index, "frameNo")}
                        className="btn btn-danger customer-dlt-btn"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bot-input">
              <label>Certificate of Reg.</label>
              <input type="text" />
              <div className="customer-img-con">
                <div className="customer-btns">
                  <label className="btn btn-secondary">
                    Image
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/gif"
                      multiple
                      onChange={(e) => handleFileChange(e, "registration")}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div className="customer-img">
                  {registrationFiles.map((file, index) => (
                    <div key={index} className="cus-image-container">
                      <img src={file} alt="Uploaded" />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index, "registration")}
                        className="btn btn-danger customer-dlt-btn"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bot-input">
              <label>Engine No. & Model</label>
              <input type="text" />
              <div className="customer-img-con">
                <div className="customer-btns">
                  <label className="btn btn-secondary">
                    Image
                    <input
                      type="file"
                      accept="image/jpeg, image/png, image/gif"
                      multiple
                      onChange={(e) => handleFileChange(e, "engine")}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div className="customer-img">
                  {engineFiles.map((file, index) => (
                    <div key={index} className="cus-image-container">
                      <img src={file} alt="Uploaded" />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index, "engine")}
                        className="btn btn-danger customer-dlt-btn"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
