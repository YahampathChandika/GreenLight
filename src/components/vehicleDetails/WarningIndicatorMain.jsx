import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/VisualInspection.css';

function WarningIndicatorMain() {
  const ratingOptions = [
    { label: 'Good', color: 'green' },
    { label: 'Normal', color: 'yellow' },
    { label: 'Bad', color: 'red' },
    { label: 'NA', color: 'gray' },
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
      console.error('No file selected.');
    }
  };
  

  const handleDeleteImage = () => {
    setFile(null); // Clear the uploaded image
  };

  
  // Sample data for your table
  const data = [
    { id: 1, attribute: 'Trackson / ABS warning' },
    { id: 2, attribute: 'Air bags warning' },
    { id: 3, attribute: 'E C T warning' },
    { id: 4, attribute: 'Seat belt warning' },
    { id: 5, attribute: 'Fuel level warning' },
    { id: 6, attribute: 'Engine Check warning' },
    { id: 7, attribute: 'Oil pressure warning' },
    { id: 8, attribute: 'Tyre pressure warning' },
    { id: 9, attribute: 'Battery light warning' },
    { id: 10, attribute: 'Transmission temperature warning' },
    { id: 11, attribute: 'Service working warning' },
    { id: 12, attribute: 'Power steering oil warning' },
  ];

  return (
    <div className='vi-main-con'>
      <div className='vi-main-content'>
        {/* <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        <div className='vi-content'>
          <div className='vi-content-top'>
            <p> Warning and Indicator Main</p>
            <div className='vi-content-top-img-con'>
              <div className='vi-content-top-btns'>
                <label className="btn btn-secondary">
                  Upload File
                  <input type="file" accept="image/jpeg, image/png, image/gif" onChange={handleFileChange} style={{ display: 'none' }} />
                </label>
                <button type="button" onClick={handleDeleteImage} className="btn btn-danger">Delete</button>
              </div>
              <div className='vi-content-top-img'>
                {file && <img src={file} alt="Uploaded" />}
              </div>
            </div>
          </div>
          <div className='vi-content-bot'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Attribute Name</th>
                  <th scope='col'>Good</th>
                  <th scope='col'>Normal</th>
                  <th scope='col'>Bad</th>
                  <th scope='col'>N/A</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <th scope='row'>{item.id}</th>
                    <td>{item.attribute}</td>
                    {ratingOptions.map((option) => (
                      <td key={option.label}>
                        <label className='select-lbl'>
                          <input
                            type='radio'
                            name={`rating-${item.id}-${item.attribute}`}
                            value={option.label}
                            checked={attributeRatings[item.attribute] === option.label}
                            onChange={() => handleRatingChange(item.attribute, option.label)}
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
        {/* <button type="button" className="btn btn-primary next-btn">Next</button> */}
      </div>
    </div>
  );
}

export default WarningIndicatorMain;
