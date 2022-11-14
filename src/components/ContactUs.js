import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className='contact-headbgimg'>
                <div className='contact-headtag text-center'>
                    <h1 >Contact US</h1>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <iframe title="Google maps" className='map-contact' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15226.117006626042!2d78.39558745!3d17.434364849999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1667898318254!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='contact-card card'>
                            <div className='info'>
                                <i class="fa fa-solid fa-envelope"></i><br />
                                <h4>Email Address</h4>
                                <h5>info@company.com</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='contact-card card'>
                            <div className='info'>
                                <i class="fa fa-solid fa-phone"></i>
                                <h4>Phone Number</h4>
                                <h5>033-34568999</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='contact-card card'>
                            <div className='info'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <h4>Address</h4>
                                <h5>Madvahar,Canada</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br />


            <div className='text-center'>
                <h4>Contact Us</h4>
                <h2>Feel Free To Contact Us</h2>
            </div>
            <div className=''>
                <form>
                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-md-6  '>
                                <input className="form-control mb-2 fmbgclr" type="text" placeholder='Name' />
                                <input className="form-control mb-2 fmbgclr" type="email" placeholder='Email' />
                            </div>
                            <div className='col-md-6  '>
                                <input className="form-control mb-2 fmbgclr" type="tel" placeholder='Mobile No' />
                                <input className="form-control mb-2 fmbgclr" type="text" placeholder='Subject' />

                            </div>
                            <div className='col-md-12'>
                                <input className="form-control textaera fmbgclr" type="text" placeholder='Message' />
                            </div>
                            <button className='btn contct-btn mb-4 mt-5'>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default ContactUs

