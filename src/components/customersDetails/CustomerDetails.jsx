import React, { useState, useEffect } from "react";
import "../../assets/scss/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, Controller } from "react-hook-form";
import { Dropdown, Radio, RadioGroup } from "rsuite";

function CustomerDetails({ hideButtons }) {
  const [mileageFiles, setMileageFiles] = useState([]);
  const [frameNoFiles, setFrameNoFiles] = useState([]);
  const [registrationFiles, setRegistrationFiles] = useState([]);
  const [engineFiles, setEngineFiles] = useState([]);
  const [files, setFiles] = useState([]);

  const { register, handleSubmit, control, setValue } = useForm();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);

  const onSubmit = (data) => {
    console.log("data", data);
    localStorage.setItem("CustomerDetailsData", JSON.stringify(data));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedRatings = localStorage.getItem("OverallResult");
    if (savedRatings) {
      setSelectedRadioButton(savedRatings);
    }
  }, []);

  // Get only the date part (YYYY-MM-DD)
  const formattedDate = currentDate.toISOString().split("T")[0];

  useEffect(() => {
    // Load saved data from local storage
    const savedData = localStorage.getItem("CustomerDetailsData");
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

  useEffect(() => {
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

  const handleFileChange = (e, field) => {
    const selectedFiles = e.target.files;
    const fileURLs = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const objectURL = URL.createObjectURL(selectedFiles[i]);
      fileURLs.push(objectURL);
    }

    if (field === "mileage") {
      const updatedMileageFiles = [...mileageFiles, ...fileURLs];
      localStorage.setItem("mileageFiles", JSON.stringify(updatedMileageFiles));
      setMileageFiles(updatedMileageFiles);
    } else if (field === "frameNo") {
      const updatedFrameNoFiles = [...frameNoFiles, ...fileURLs];
      localStorage.setItem("frameNoFiles", JSON.stringify(updatedFrameNoFiles));
      setFrameNoFiles(updatedFrameNoFiles);
    } else if (field === "registration") {
      const updatedRegistrationFiles = [...registrationFiles, ...fileURLs];
      localStorage.setItem(
        "registrationFiles",
        JSON.stringify(updatedRegistrationFiles)
      );
      setRegistrationFiles(updatedRegistrationFiles);
    } else if (field === "engine") {
      const updatedEngineFiles = [...engineFiles, ...fileURLs];
      localStorage.setItem("engineFiles", JSON.stringify(updatedEngineFiles));
      setEngineFiles(updatedEngineFiles);
    }
  };

  const handleDeleteImage = (index, field) => {
    if (field === "mileage") {
      const updatedMileageFiles = [...mileageFiles];
      updatedMileageFiles.splice(index, 1);
      setMileageFiles(updatedMileageFiles);
      localStorage.setItem("mileageFiles", JSON.stringify(updatedMileageFiles));
    } else if (field === "frameNo") {
      const updatedFrameNoFiles = [...frameNoFiles];
      updatedFrameNoFiles.splice(index, 1);
      setFrameNoFiles(updatedFrameNoFiles);
      localStorage.setItem("frameNoFiles", JSON.stringify(updatedFrameNoFiles));
    } else if (field === "registration") {
      const updatedRegistrationFiles = [...registrationFiles];
      updatedRegistrationFiles.splice(index, 1);
      setRegistrationFiles(updatedRegistrationFiles);
      localStorage.setItem(
        "registrationFiles",
        JSON.stringify(updatedRegistrationFiles)
      );
    } else if (field === "engine") {
      const updatedEngineFiles = [...engineFiles];
      updatedEngineFiles.splice(index, 1);
      setEngineFiles(updatedEngineFiles);
      localStorage.setItem("engineFiles", JSON.stringify(updatedEngineFiles));
    }
  };

  const handleRadioSelect = (value) => {
    setSelectedRadioButton(value);
    localStorage.setItem("OverallResult", value);
  };

  return (
    <div>
      <div className="details-main">
        <div className="details-main-con">
          <p>Customer Details</p>
          <RadioGroup
            name="radioList"
            inline
            appearance="picker"
            value={selectedRadioButton}
            onChange={handleRadioSelect}
            style={{border: '0.5px solid rgb(114, 114, 114)'}}
          >
            <div
              className={`color-square red ${
                selectedRadioButton === "red" ? "checked" : ""
              }`}
              onClick={() => handleRadioSelect("red")}
            ></div>
            <div
              className={`color-square yellow ${
                selectedRadioButton === "yellow" ? "checked" : ""
              }`}
              onClick={() => handleRadioSelect("yellow")}
            ></div>
            <div
              className={`color-square green ${
                selectedRadioButton === "green" ? "checked" : ""
              }`}
              onClick={() => handleRadioSelect("green")}
            ></div>
          </RadioGroup>
          <input
            type="text"
            placeholder="Invoice No."
            id="invoice"
            {...register("invoice")}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <div className="details-top">
              <div className="details-top-left">
                <div className="details-input">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register("name")}
                  />
                </div>
                <div className="details-input">
                  <label>Phone No</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    {...register("phone")}
                  />
                </div>
              </div>
              <div className="details-top-right">
                <div className="details-input">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    {...register("email")}
                  />
                </div>
                <div className="details-input">
                  <label>Inspection Location</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    {...register("address")}
                  />
                </div>
              </div>
            </div>
            <div className="details-mid">
              <p>Vehicle Details</p>
              <div className="details-mid-con">
                <div className="details-mid-con-left">
                  <div className="details-input">
                    <label>Vehicle No.</label>
                    <input type="text" id="veh-no" {...register("veh-no")} />
                  </div>
                  <div className="details-input">
                    <label>Make</label>
                    <input type="text" id="make" {...register("make")} />
                  </div>
                  <div className="details-input">
                    <label>Transmission</label>
                    <input
                      type="text"
                      id="transmission"
                      {...register("transmission")}
                    />
                  </div>
                  {/* <div className="details-input">
                    <label>Transmission</label>
                    <input
                      type="text"
                      id="transmission"
                      {...register("transmission")}
                    />
                  </div> */}
                </div>
                <div className="details-mid-con-mid">
                  <div className="details-input">
                    <label>Manufacture Year</label>
                    <input
                      type="text"
                      id="mfc-date"
                      {...register("mfc-date")}
                    />
                  </div>
                  <div className="details-input">
                    <label>Model</label>
                    <input type="text" id="model" {...register("model")} />
                  </div>
                  <div className="details-input">
                    <label>T belt next replacement </label>
                    <input
                      type="text"
                      id="milage"
                      {...register("T belt next replacement ")}
                    />
                  </div>
                </div>
                <div className="details-mid-con-right">
                  <div className="details-input">
                    <label>Registration Year</label>
                    <input
                      type="text"
                      id="reg-year"
                      {...register("reg-year")}
                    />
                  </div>
                  <div className="details-input">
                    <label>Fuel Type</label>
                    <input type="text" id="fuel" {...register("fuel")} />
                  </div>
                  <div className="details-input">
                    <label>Next service</label>
                    <input
                      type="text"
                      id="fuel"
                      {...register("Next service")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="details-bot">
              <div className="details-bot-inputs">
                <div className="bot-input">
                  <label>Milage</label>
                  <input
                    type="text"
                    id="milage"
                    {...register("milage")}
                    style={{ marginBottom: "20px" }}
                  />
                  <div className="customer-img-con">
                    <div className="customer-btns">
                      {!hideButtons && (
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
                      )}
                    </div>
                    <div className="customer-img">
                      {mileageFiles.map((file, index) => (
                        <div key={index} className="cus-image-container">
                          <img src={file} alt="Uploaded" />
                          {!hideButtons && ( // Use the ! operator to check if hideButtons is false
                            <button
                              type="button"
                              onClick={() =>
                                handleDeleteImage(index, "mileage")
                              }
                              className="btn btn-danger customer-dlt-btn"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bot-input">
                  <label>Frame No.</label>
                  <input
                    type="text"
                    id="frame-no"
                    {...register("frame-no")}
                    style={{ marginBottom: "20px" }}
                  />
                  <div className="customer-img-con">
                    <div className="customer-btns">
                      {!hideButtons && (
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
                      )}
                    </div>
                    <div className="customer-img">
                      {frameNoFiles.map((file, index) => (
                        <div key={index} className="cus-image-container">
                          <img src={file} alt="Uploaded" />
                          {!hideButtons && ( // Use the ! operator to check if hideButtons is false
                            <button
                              type="button"
                              onClick={() =>
                                handleDeleteImage(index, "frameNo")
                              }
                              className="btn btn-danger customer-dlt-btn"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bot-input">
                  <label>Certificate of Reg.</label>
                  <input
                    type="text"
                    id="cer-reg"
                    {...register("cer-reg")}
                    style={{ marginBottom: "20px" }}
                  />
                  <div className="customer-img-con">
                    <div className="customer-btns">
                      {!hideButtons && (
                        <label className="btn btn-secondary">
                          Image
                          <input
                            type="file"
                            accept="image/jpeg, image/png, image/gif"
                            multiple
                            onChange={(e) =>
                              handleFileChange(e, "registration")
                            }
                            style={{ display: "none" }}
                          />
                        </label>
                      )}
                    </div>
                    <div className="customer-img">
                      {registrationFiles.map((file, index) => (
                        <div key={index} className="cus-image-container">
                          <img src={file} alt="Uploaded" />
                          {!hideButtons && ( // Use the ! operator to check if hideButtons is false
                            <button
                              type="button"
                              onClick={() =>
                                handleDeleteImage(index, "registration")
                              }
                              className="btn btn-danger customer-dlt-btn"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bot-input">
                  <label>Engine No. & Model</label>
                  <input
                    type="text"
                    id="eng-no"
                    {...register("eng-no")}
                    style={{ marginBottom: "20px" }}
                  />
                  <div className="customer-img-con">
                    <div className="customer-btns">
                      {!hideButtons && (
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
                      )}
                    </div>
                    <div className="customer-img">
                      {engineFiles.map((file, index) => (
                        <div key={index} className="cus-image-container">
                          <img src={file} alt="Uploaded" />
                          {!hideButtons && ( // Use the ! operator to check if hideButtons is false
                            <button
                              type="button"
                              onClick={() => handleDeleteImage(index, "engine")}
                              className="btn btn-danger customer-dlt-btn"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                {!hideButtons && (
                  <button
                    className="btn btn-dark"
                    type="submit"
                    style={{ width: "150px" }}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </>
        </form>
      </div>
    </div>
  );
}

export default CustomerDetails;
