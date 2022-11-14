import React from 'react'
import { Link } from 'react-router-dom';

const Services1 = () => {
    return (
        <div>
            <header className="services-head">
                <h1 className="services-H1-main-page">Our Services</h1>
            </header>

            <div className='container mt-5'>
                {/* first */}
                <div className='row'>
                    <div className='col-lg-6'>
                        <img className='services-image' src='./images/Digital-currency.jpg' width='100%' height='100%' alt='pic' />
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <i class="fa-solid fa-box-archive services-icon"></i>
                        <h1 className='mt-4 services-text'>Digital Currencies</h1>
                        <p className='mt-5 services-para'>You will see Link bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.</p>
                    </div>
                </div>
                <hr />
                {/* second */}
                <div className='row mt-5'>
                    <div className='col-lg-6 mt-3'>
                        <i class="fa-solid fa-box-archive services-icon"></i>
                        <h1 className='mt-4 services-text'>Fanincal Solutions</h1>
                        <p className='mt-5 services-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ex massa. In ac laoreet urna. Curabitur eu enim nibh. Phasellus sodales nisi vel leo aliquam, ut tempus augue hendrerit. Pellentesque eu risus tincidunt, condimentum eros in, auctor augue. Vivamus et urna blandit, varius sapien sed..</p>
                    </div>
                    <div className='col-lg-6'>
                        <img className='services-image' src='./images/Fanincial-solution.jpg' width='100%' height='100%' alt='pic' />
                    </div>
                </div>
                <hr />
                {/* third */}
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img className='services-image' src='./images/Crypto.jpg' width='100%' height='100%' alt='pic' />
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <i class="fa-solid fa-box-archive services-icon"></i>
                        <h1 className='mt-4 services-text'>Cryptocurrency Exchanges</h1>
                        <p className='mt-5 services-para'>Mauris id efficitur ante, vitae ultrices metus. Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.</p>
                    </div>
                </div>
            </div>

            <div className='services-background'>
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

            {/* investment and crypto exchange */}

            <div className='container section-main'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <div className='section-head'>
                            <h6>Investment in Details</h6>
                            <h4>Upgrade your knowledge</h4>
                        </div>
                    </div>

                    <div className='col-lg-10 offset-lg-1'>
                        <div class="tile" id="tile-1">

                            {/* <!-- Nav tabs --> */}
                            <ul class="nav nav-tabs nav-justified" role="tablist">
                                <div class="slider"></div>
                                <li class="nav-item">
                                    <a class="nav-link active" id="Crypto Investments-tab" data-toggle="tab" href="#Crypto Investments" role="tab" aria-controls="Crypto Investments" aria-selected="true">Crypto Investments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Cryptocurrency Market-tab" data-toggle="tab" href="#Cryptocurrency Market" role="tab" aria-controls="Cryptocurrency Market" aria-selected="false">Cryptocurrency Market</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Financial Planning-tab" data-toggle="tab" href="#Financial Planning" role="tab" aria-controls="Financial Planning" aria-selected="false">Financial Planning</a>
                                </li>

                            </ul>

                            {/* <!-- Tab panes --> */}
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="Crypto Investments" role="tabpanel" aria-labelledby="Crypto Investments-tab">

                                    <div class="card">
                                        <div class="card-body">
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <img className='services-image' src='./images/service-details.jpg' width='100%' height='100%' alt='pic' />
                                                </div>
                                                <div className='col-lg-7 right-content'>
                                                    <h4>Learn more about cryptocurrency investments</h4>
                                                    <p>Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.</p>
                                                    <span>- Top Crypto prices and charts</span>
                                                    <span>- Is Cryptocurrency a good investment?</span>
                                                    <span class="last-span">- Crypto Market Insiders and News</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="Cryptocurrency Market" role="tabpanel" aria-labelledby="Cryptocurrency Market-tab">

                                    <div class="card">
                                        <div class="card-body">
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <img className='services-image' src='./images/Fanincial-solution.jpg' width='100%' height='100%' alt='pic' />
                                                </div>
                                                <div className='col-lg-7 right-content'>
                                                    <h4>Read more on Cryptocurrency Market</h4>
                                                    <p>Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.</p>
                                                    <span>- Digital Currency Exchange</span>
                                                    <span>- Trading Cryptocurrencies Online</span>
                                                    <span class="last-span">- Different Categories of Digital Currencies</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="Financial Planning" role="tabpanel" aria-labelledby="Financial Planning-tab">

                                    <div class="card">
                                        <div class="card-body">
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <img className='services-image' src='./images/Crypto.jpg' width='100%' height='100%' alt='pic' />
                                                </div>
                                                <div className='col-lg-7 right-content'>
                                                    <h4>How to carefully plan on your online financials</h4>
                                                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus. Nulla facilisi. Mauris vitae lacinia magna. Nam euismod sapien sit amet elementum blandit. Nulla non placerat neque.</p>
                                                    <span>- Financial Planning and Investments</span>
                                                    <span>- Business Networking</span>
                                                    <span class="last-span">- Managing Digital Assets</span>
                                                </div>
                                            </div>
                                        </div>
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

export default Services1;