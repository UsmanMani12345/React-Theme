import React from 'react';
import './Services.css';
import Image from '../images/code.png';
import Image1 from '../images/data.png';
import Image2 from '../images/digital.png';
import Image3 from '../images/app.png';
import Image4 from '../images/serach.png';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <>
    <div className="services" id="services">
    <div className="container-services">
    <p> <span>.</span>Services<span>.</span></p>
</div>


<div className="services-container">
    <div className="services-content">
    <h1>Services We Offer</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi minus animi et, magni iure!</p>
    </div>
    <div className="services-btn">
        <a href="">
        See All Services <span><FaArrowRight className='forward'/></span>
        </a>
    </div>
</div>
        

        <div className="services-card">
            <div className="card-one">
                <div className="card-img">
                    <img src={Image} alt="" />
                </div>
                <div className="card-heading">
                    <h2>Web Development</h2>
                </div>
                <div className="card-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam omnis unde at praesentium accusamus odit velit. Iste ullam nesciunt sit.</p>
                </div>
                <div className="card-anchor">
                    <a href="">Read More</a>
                    <span><FaArrowRight className='forward-one'/></span>
                </div>
            </div>

            <div className="card-one">
                <div className="card-img">
                    <img src={Image1} alt="" />
                </div>
                <div className="card-heading">
                    <h2>SaaS Products</h2>
                </div>
                <div className="card-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam omnis unde at praesentium accusamus odit velit. Iste ullam nesciunt sit.</p>
                </div>
                <div className="card-anchor">
                    <a href="">Read More</a>
                    <span><FaArrowRight className='forward-one'/></span>
                </div>
            </div>

            <div className="card-one">
                <div className="card-img">
                    <img src={Image2} alt="" />
                </div>
                <div className="card-heading">
                    <h2>Digital Marketing</h2>
                </div>
                <div className="card-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam omnis unde at praesentium accusamus odit velit. Iste ullam nesciunt sit.</p>
                </div>
                <div className="card-anchor">
                    <a href="">Read More</a>
                    <span><FaArrowRight className='forward-one'/></span>
                </div>
            </div>


            <div className="card-one">
                <div className="card-img">
                    <img src={Image3} alt="" />
                </div>
                <div className="card-heading">
                    <h2>App Development</h2>
                </div>
                <div className="card-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam omnis unde at praesentium accusamus odit velit. Iste ullam nesciunt sit.</p>
                </div>
                <div className="card-anchor">
                    <a href="">Read More</a>
                    <span><FaArrowRight className='forward-one'/></span>
                </div>
            </div>


            <div className="card-one">
                <div className="card-img">
                    <img src={Image4} alt="" />
                </div>
                <div className="card-heading">
                    <h2>SEO Services</h2>
                </div>
                <div className="card-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam omnis unde at praesentium accusamus odit velit. Iste ullam nesciunt sit.</p>
                </div>
                <div className="card-anchor">
                    <a href="">Read More</a>
                    <span><FaArrowRight className='forward-one'/></span>
                </div>
            </div>


            <div className="card-one">
                <div className="card-img">
                    <img src={Image} alt="" />
                </div>
                <div className="card-heading">
                    <h2>Web Development</h2>
                </div>
                <div className="card-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam omnis unde at praesentium accusamus odit velit. Iste ullam nesciunt sit.</p>
                </div>
                <div className="card-anchor">
                    <a href="">Read More</a>
                    <span><FaArrowRight className='forward-one'/></span>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Services