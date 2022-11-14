import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div>
      <div className='container'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active carlimg1">
              <div className='text-center carols-imgpding'>
                <h4>Digital Currency for you & Best Crypto Tips</h4>
                <p>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>

                <div className='buttons d-flex justify-content-center'>
                  <div className='first-button mr-2'>
                    <Link to='#'>Discover More</Link>
                  </div>
                  <div className='second-button'>
                    <Link to='/contact us'>Contact us</Link>
                  </div>
                </div>

              </div>
            </div>
            <div class="carousel-item carlimg2">
              <div className='text-center carols-imgpding1'>
                <h4>Digital Currency for you & Best Crypto Tips</h4>
                <p>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>

                <div className='buttons d-flex justify-content-center'>
                  <div className='first-button mr-2'>
                    <Link to='#'>Discover More</Link>
                  </div>
                  <div className='second-button'>
                    <Link to='/contact us'>Contact us</Link>
                  </div>
                </div>

              </div>
            </div>
            <div class="carousel-item carlimg3">
              <div className='text-center carols-imgpding2'>
                <h4>Digital cuyrrency for you &best crypto tips</h4>
                <p>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>

               <div className='buttons d-flex justify-content-center'>
                  <div className='first-button mr-2'>
                    <Link to='#'>Discover More</Link>
                  </div>
                  <div className='second-button'>
                    <Link to='/contact us'>Contact us</Link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Carousel;



