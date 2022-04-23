import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className='footer-area'>
                <div className='footer'>
                    <div className='icon'>
                        <h1>mealDb</h1>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className="contact">
                        <span>Enter Your Email</span> <br />
                        <input className='footer-iinput' type="email" placeholder='Enter your email' /> <br />
                        <button className='regural-btn'>submit</button>
                    </div>
                    <div className="location">
                        <p>
                            401 Khulna Sador <br />
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
                <p>Copyright2022 &#169;</p>
            </div>


        </>
    );
};

export default Footer;