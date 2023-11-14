import React from 'react';
import './Main.css';
import Image  from '../images/1.png';
import {

    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaYoutube,
  } from 'react-icons/fa';
  import { BsPlay } from 'react-icons/bs';
const Main = () => {
  return (
    <>
    <div className="main" id="main">
        <div className="main-container">
    <div className="heading-left">
                    <div className="container-links">
                    <FaInstagram/>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaYoutube/>
                    </div>

<div className="container-heading">
    <p> <span>.</span>IT SOLUTION<span>.</span></p>
</div>

<div className="heading-full">
<h1>Providing The Best Services & IT <span>Solution</span></h1>
</div>
                    
                    <div className="para-header">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem eaque ipsa earum. Maiores, nisi.</p>
                    </div>
                    <div className="header-btn">
                        <a href="">Start Now</a>
                        <div className="play-icon">
                        <BsPlay className='play'/>
                        </div>
                    </div>
                </div>


            <div className="heading-right">
                <div className="right-img">
                    <img src={Image} alt="" />
                </div>
            </div>

            </div>

    </div>
    
    </>
  )
}

export default Main