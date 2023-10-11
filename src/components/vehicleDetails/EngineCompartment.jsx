import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/VisualInspection.css';

function EngineCompartment() {
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
    { id: 1, attribute: 'Engine oil cap' },
    { id: 2, attribute: 'Engine oil sludge' },
    { id: 3, attribute: 'Engine oil level and condition' },
    { id: 4, attribute: 'No tapet paking leak' },
    { id: 5, attribute: 'Complete radiator and mount' },
    { id: 6, attribute: 'Coolent condition / radiator cap' },
    { id: 7, attribute: 'Coolent level' },
    { id: 8, attribute: 'Transmission fluid level and condition' },
    { id: 9, attribute: 'Power steering fluid level and condition' },
    { id: 10, attribute: 'Break fluid level and condition' },
    { id: 11, attribute: 'Drive belt condition' },
    { id: 12, attribute: '12V battery condition and terminal' },
    { id: 13, attribute: 'Shocks and shock mounts' },
    { id: 14, attribute: 'Radiator hose condition' },
    { id: 15, attribute: 'Intake hose condition' },
    { id: 16, attribute: 'Complete A/C cooler and A/C line' },
    { id: 17, attribute: 'Heat insulation hood' },
    { id: 18, attribute: 'Crossmember hood lock' },
    { id: 19, attribute: 'Crossmember front low' },
    { id: 20, attribute: 'Brace hood lock' },
    { id: 21, attribute: 'Panel lamp support' },
    { id: 22, attribute: 'Hinge front hood' },
    { id: 23, attribute: 'Panel fendor apron L/H/S' },
    { id: 24, attribute: 'Panel fendor apron R/H/S' },
    { id: 25, attribute: 'Member apron L/H/S' },
    { id: 26, attribute: 'Member apron R/H/S' },
    { id: 27, attribute: 'Garnish cowl top condition' },
    { id: 28, attribute: 'Engine and engine room cleanlines' },
  ];

  return (
    <div className='vi-main-con'>
      <div className='vi-main-content'>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className='vi-content'>
          <div className='vi-content-top'>
            <p>Engine Compartment</p>
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
        <button type="button" className="btn btn-primary next-btn">Next</button>
      </div>
    </div>
  );
}

export default EngineCompartment;
