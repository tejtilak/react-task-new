import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Aboutus from './components/Aboutus';
import Carousel from './components/Carousel';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Foottext from './components/Foottext';
import Services from './components/Services';
import Services1 from './components/Services1';
import Navbar from './navbar/Navbar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Carousel />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/about us' element={<Aboutus />} />
          <Route exact path='/our services' element={<Services1 />} />
          <Route exact path='/contact us' element={<ContactUs />} />          
        </Routes>
        <Foottext />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App