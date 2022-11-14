import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-main sticky-top navbr" >
                <Link className="navbar-brand nav-logo" to="/">
                    <img className='nav-image' src='./images/Logo.png' alt='logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto nav-list">
                        <li className="nav-item nav-li">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-li">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item nav-li">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item nav-li dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item nav-dropdwn" to="/about us">About Us</Link>
                                <Link className="dropdown-item nav-dropdwn" to="/our services">Our Services</Link>
                                <Link className="dropdown-item nav-dropdwn" to="/contact us">Contact Us</Link>
                            </div>
                        </li>
                    </ul>
                    <Link to="/contact us" >
                        <button type="button" className="btn btn-primary list-button">Contact Support</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar