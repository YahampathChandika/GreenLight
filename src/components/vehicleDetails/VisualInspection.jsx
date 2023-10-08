import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../common/Navbar'
import '../../assets/scss/VisualInspection.css'
import { Uploader } from 'rsuite';
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';


function VisualInspection() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <div>
        <Navbar/>
      <div className='inspaction-main'>
        <div className='inspaction-top'>
          <div className="progress" style={{height :'10px' , marginBottom:'15px'}}>
            <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p style={{marginTop:'50px', marginBottom:'20px' , fontSize:'20px' , fontStyle:'bold' , color:'black'}}>Wind Shield</p>
        </div>
        <div className='inspaction-mid'>
        <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
          <div style={{ height: 150, width:300, display: 'flex', alignItems: 'center', justifyContent: 'center' , backgroundColor:'#aaaaaa' }}>
            <CameraRetroIcon />
          </div>
        </Uploader>
        <div className='inspaction-mid-butt' style={{marginBottom:'70px' , marginTop:'20px'}}>
           <button type="button" class="btn btn-info" style={{width:'9.5%',color:'white'}}>Select Photo</button>
           <button type="button" class="btn btn-secondary" style={{marginLeft:'10px',width:'9.5%'}} >Remove</button>
        </div>
        </div>
        <div className='inspaction-bot' >
          <table class="table table-bordered" style={{border:'1px solid #03b103'}} >
            <thead>
              <tr >
                <th scope="col">Attribute</th>
                <th scope="col" style={{width:'10%'}}>Good</th>
                <th scope="col" style={{width:'10%'}}>Normal</th>
                <th scope="col" style={{width:'10%'}}>Bad</th>
                <th scope="col" style={{width:'10%'}}>N/A</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td style={{padding:'14px'}}> <p >Original</p> </td>
                  <td className='box-tb' > 
                  <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-2"
                      checked
                      autoComplete="off"
                    />
                    <label className="btn btn-primary" htmlFor="btn-check-2">
                      Checked
                    </label>
                  </td>
                  <td style={{padding:'14px'}}>
                    <div>
                      
                    </div>
                  </td>
                  <td style={{padding:'14px'}}>@mdo</td>
                  <td style={{padding:'14px'}}>@mdo</td>
                </tr>
                <tr>
                  <td style={{padding:'14px'}}> <p>No evidence of major Damage</p> </td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td style={{padding:'14px'}}> <p>No evidence of major Damage</p> </td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td style={{padding:'14px'}}> <p>No minaral diposit/ Acid rain damage</p> </td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td style={{padding:'14px'}}> <p>No evidence of major Damage</p> </td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td style={{padding:'14px'}}> <p>No evidence of major Damage</p> </td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td style={{padding:'14px'}}> <p>No evidence of major Damage</p> </td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>    
    </div>
  );
}

export default VisualInspection;
