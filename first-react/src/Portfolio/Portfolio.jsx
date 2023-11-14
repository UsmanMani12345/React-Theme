import React from 'react';
import './Portfolio.css';
import Image  from '../images/4.png';
const Portfolio = () => {
  return (
    <>
    <div className="portfolio" id="portfolio">
   
<div className="portfolio-container">
    <div className="portfolio-left">
    <div className="right-img">
                    <img src={Image} alt="" />
                </div>
    </div>
<div className="portfolio-right">
<div className="portfolio-content">
<div className="container-services">
    <p><span>.</span> Why Choose Us<span>.</span></p>
</div>

<div className="heading-portfolio">
    <h1>Why Our Customer Choose Working With Us</h1>
</div>

<div className="para-portfolio">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum velit pariatur architecto quae suscipit iure odio fuga maxime ratione!</p>
</div>

<div className="portfolio-comb">
    <div className="portfolio-provide">
    <div className="portfolio-percentage">
        <h1>01<span>.</span></h1>
    </div>
    <div className="portfolio-head">
        <h3>Latest Technologies</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio inventore quibusdam dignissimos maxime modi quo!</p>
    </div>
    </div>

    <div className="portfolio-provide">
    <div className="portfolio-percentage">
        <h1>02<span>.</span></h1>
    </div>
    <div className="portfolio-head">
        <h3>Unique Solution</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio inventore quibusdam dignissimos maxime modi quo!</p>
    </div>
    </div>

    <div className="portfolio-provide">
    <div className="portfolio-percentage">
        <h1>03<span>.</span></h1>
    </div>
    <div className="portfolio-head">
        <h3>Powerful Strategies</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio inventore quibusdam dignissimos maxime modi quo!</p>
    </div>

    </div>
    <div className="about-btn">
        <a href="">
        Get in Touch
        </a>
    </div>
</div>


</div>

</div>




    
</div>



    </div>
    
    
    
    
    
    
    </>
  )
}

export default Portfolio