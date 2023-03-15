import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div>
      <header className="aboutus-head">
        <h1 className="aboutus-H1-main-page">About Us</h1>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'><br /><br />
            <img src="./images/121.jpg" alt="pics" height='90%' width='100%' />

          </div>

          <div className='col-md-6 card mt-5 shadow border-0 bg-white rounded ' >

            <div className='aaa mt-2'>
              <h4>Mexant Financial Planning <i class="fa fa-chevron-down" aria-hidden="true"></i></h4><br />
              <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free.

                <br /><br />We do not ask you anything in return. You are free to use our templates for any purpose.</p><br /><br />
              <h4>Mexant Crypto Investing <i class="fa fa-chevron-down" aria-hidden="true"></i></h4><br /><br />

              <h4>Cryptocurrency Investments<i class="fa fa-chevron-down" aria-hidden="true"></i></h4><br />
            </div>

          </div>

        </div>

        <div className='aboutus-background'>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-lg-5'>
                {/* <h4>Business
                  <em>Solutions</em>and
                  <strong>Crypto</strong>
                  Investments
                </h4> */}
              </div>

              <div className='col-lg-7'>
                <div className='buttons'>
                  <div className='first-button'>
                    <Link to='#'>Discover More</Link>
                  </div>
                  <div className='second-button'>
                    <Link to='/contact us'>Contact us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mt-4'>
          <div className='row'>
            <div className='col-md-5 '>
              <div className='kkr'>
                <h3>Please tell us about your idea and how<br /> you want it to be</h3>
                <p>If you need more HTML templates, you can try visiting TooCSS <br />
                  blog and Tooplate websites. You can get many good<br />
                  templates on those websites.<br /><br />
                  Nulla non placerat neque, a gravida elit. Vestibulum ante <br />
                  ipsum primis in faucibus orci luctus et ultrices posuere cubilia<br />
                  curae; Morbi sed dolor condimentum tellus commodo<br />
                  volutpat non malesuada turpis.
                </p>
                <button className='kjh'>Discover More</button>
              </div>
            </div>
            <div className='col-md-7'>

              <div className='row mt-3'>

                <div className='col-md-5 mb-2 mr-3 card shadow border-0 bg-white rounded'>
                  <div className='rrr m-0'>
                    <div className='d-flex'>
                      <h3>First Step</h3><br />
                      <h1 className='ml-5 text-primary'>01</h1>
                    </div>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                  </div>
                </div>

                <div className='col-md-5 col-11 card shadow border-0 bg-white rounded '>
                  <div className='rrr'>
                    <div className='d-flex'>
                      <h3>Second Step</h3><br />
                      <h1 className='ml-5 text-primary'> 02</h1>
                    </div>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                  </div>
                </div>
              </div>
              <div className='row mt-3 '>
                <div className='col-md-5 mr-3 card shadow border-0 bg-white rounded'>
                  <div className='rrr'>
                    <div className='d-flex'>

                      <h3>Third Step</h3><br />
                      <h1 className='ml-5 text-primary'> 03</h1>
                    </div>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                  </div>
                </div>
                <div className=' mt-2 col-md-5 col-11 card shadow border-0 bg-white rounded'>
                  <div className='rrr'>
                    <div className='d-flex'>

                      <h3>Fourth Step</h3><br />
                      <h1 className='ml-5 text-primary'> 04</h1>
                    </div>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus