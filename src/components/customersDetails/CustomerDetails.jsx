import React from 'react'
import Navbar from '../common/Navbar'
import '../../assets/scss/CustomerDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerDetails() {
      
  return (
    <div>

      <Navbar/>
      <div className='details-main'>
        <p>Customer Details</p>  
      <div className='details-top'>
        <div className='details-top-left'>
        <div className='details-input'>
            <label>Name</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        <div className='details-input'>
            <label>Phone No</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        </div>
        <div className='details-top-right'>
        <div className='details-input'>
            <label>Email</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        <div className='details-input'>
            <label>Inspection Location</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        </div>
      </div>
      <div className='details-mid'>
        <p>Vehicle Details</p>
        <div className='details-mid-con'>
          <div className='details-mid-con-left'>
            <div className='details-input'>
              <label>Vehicle No.</label>
              <input 
                type="text" 
                name='name'
                id='name'
                />
          </div>
          <div className='details-input'>
            <label>Make</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
         </div>
         <div className='details-input'>
            <label>Transmission</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        <div className='details-input'>
            <label>Transmission</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
          </div>
          <div className='details-mid-con-mid'>
          <div className='details-input'>
            <label>Manufacture Year</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        <div className='details-input'>
            <label>Model</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        <div className='details-input'>
            <label>Milage</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>

          </div>
          <div className='details-mid-con-right'>
          <div className='details-input'>
            <label>Registration Year</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        <div className='details-input'>
            <label>Fuel Type</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
        <div className='details-input'>
            <label>Fuel Type</label>
            <input 
              type="text" 
              name='name'
              id='name'
              />
        </div>
          </div>
        </div>
      </div>
        <div className='details-bot'>
          <div className='details-bot-left'>
            <div class="mb-3" className='details-img-input'>
              <label for="formFile" class="form-label" > <h6> Milage </h6></label>
              <input class="form-control form-control-lg" type="file" id="formFile" />
            </div>
            <div class="mb-3" className='details-img-input'>
              <label for="formFile" class="form-label"><h6>Certificate of Registration</h6></label>
              <input class="form-control form-control-lg" type="file" id="formFile"/>
            </div>
          </div>
         <div className='details-bot-right'>
           <div class="mb-3" className='details-img-input'>
              <label for="formFile" class="form-label"><h6> Frame No </h6></label>
              <input class="form-control form-control-lg" type="file" id="formFile"/>
          </div>
          <div class="mb-3" className='details-img-input'>
              <label for="formFile" class="form-label"><h6>Engine No and Model</h6></label>
              <input class="form-control form-control-lg" type="file" id="formFile"/>
            </div>
          </div>
      </div>
      <div className='details-button'>
         <button type="button" class="btn btn-primary">Next</button>
      </div>
      </div>
    </div>
  )
}

export default CustomerDetails
