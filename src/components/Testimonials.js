import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <div className='section-head'>
                            <h6>TESTIMONIALS</h6>
                            <h4>What They Say</h4>
                        </div>
                    </div>
                </div>

                <div className='container'>                    
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="500">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card card-items">
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <i className="fa fa-quote-left"></i>
                                                <p>“Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.”</p>
                                                <h4>David Eigenberg</h4>
                                                <span>CEO of Mexant</span>
                                            </div>
                                            <div className='col-lg-4'>
                                                <img className='services-image' src='./images/testimonials-01.jpg' width='100%' height='100%' alt='pic' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card card-items">
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <i className="fa fa-quote-left"></i>
                                                <p>“Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”</p>
                                                <h4>Andrew Garfield</h4>
                                                <span>CTO of Mexant</span>
                                            </div>
                                            <div className='col-lg-4'>
                                                <img className='services-image' src='./images/testimonials-01.jpg' width='100%' height='100%' alt='pic' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card card-items">
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <i className="fa fa-quote-left"></i>
                                                <p>“Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.”</p>
                                                <h4>George Lopez</h4>
                                                <span>Crypto Manager</span>
                                            </div>
                                            <div className='col-lg-4'>
                                                <img className='services-image' src='./images/testimonials-01.jpg' width='100%' height='100%' alt='pic' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials