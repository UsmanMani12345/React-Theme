import React from 'react';
import './About.css';
import Image1  from '../images/2.png';
import Image from '../images/code.png';
import Image4 from '../images/data.png';
import Image2 from '../images/digital.png';
import Image3 from '../images/app.png';

const About = () => {
  return (
    <>
    <div className="about" id="about">

    <div className="container-about">
    <p> <span>.</span>About US<span>.</span></p>
</div>

    <div className="about-container">
        <div className="about-left">
        <div className="about-heading">
            <h1>Trusted By WorldWide Clients Since  <span>2020</span></h1>
        </div>
        <div className="about-para">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, repellendus rem? Repudiandae minima labore aliquid consectetur quis omnis iusto illo sequi commodi, ipsam earum temporibus.
            </p>
        </div>

        <div className="about-skill">
            <div className="link-about">
            <img src={Image} alt="" />
            </div>
                <div className="skill-content">
            <div className="skill-heading">
                <h3>World Wide</h3>
            </div>
            <div className="skill-para">
                <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Consectetur, dolore!</p>
            </div>
            </div>


            <div className="link-about">
            <img src={Image4} alt="" />
            </div>
                <div className="skill-content">
            <div className="skill-heading">
                <h3>World Wide</h3>
            </div>
            <div className="skill-para">
                <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Consectetur, dolore!</p>
            </div>
            </div>
        </div>

        <div className="about-skill">
            <div className="link-about">
            <img src={Image3} alt="" />
            </div>
                <div className="skill-content">
            <div className="skill-heading">
                <h3>World Wide</h3>
            </div>
            <div className="skill-para">
                <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Consectetur, dolore!</p>
            </div>
            </div>


            <div className="link-about">
            <img src={Image2} alt="" />
            </div>
                <div className="skill-content">
            <div className="skill-heading">
                <h3>World Wide</h3>
            </div>
            <div className="skill-para">
                <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Consectetur, dolore!</p>
            </div>
            </div>
        </div>
        <div className="about-btn">
        <a href="">
        Get in Touch
        </a>
    </div>
        </div>


        <div className="about-right">
        <div className="right-img">
                    <img src={Image1} alt="" />
                </div>
        </div>
    </div>




    </div>
    
    
    </>
  )
}

export default About