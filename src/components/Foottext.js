import React from 'react'

const Foottext = () => {
  return (
    <div>
      <div className='foot-text mt-5 p-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <img src='./Images/logo.png' alt='logo' width='70%' />
              <p className='mt-2'>Get for your business & upgrade all aspects.Get for your business & upgrade all aspects.Get for your business & upgrade all aspects.Get for your business & upgrade all aspects.</p>
            </div>
            <div className='col-md-3'>
            <h4>Our Services</h4>
              <ul>
              
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Pages</li>
                <li>Contact Support</li>
              </ul>
            </div>
            <div className='col-md-3 '>
            <h4 className='pl-3'>Pages</h4>
              <ul>
              
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
              </ul>
              </div>
            <div className='col-md-3'>
              <h4>Company Address:</h4>
              <address>
                1-3-22A Madhapur<br/>
                LIC Building <br/>
                Hyderabad 544000
              </address>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Foottext
