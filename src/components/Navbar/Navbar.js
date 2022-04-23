import React from 'react';
import './Navbar.css';
import logo from '../../images/headding.png'

const Navbar = () => {
    return (
        <div>
            <div className='img'>
                <img src={logo} alt="" />
            </div>
            <nav className='nav-area'>
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Navbar;