import React from 'react';
import './Card.css';
import { FaArrowRight, FaDesktop , FaUser , FaXbox , FaBuilding  } from 'react-icons/fa';
const FullCard = () => {
  return (
    <>
     
     <div className="card" id="card">

     <div className="container-about">
    <p> <span>.</span>Pricing Plans<span>.</span></p>
</div>
    <div className="blog-container">
        <div className="blog-heading">
            <h1>Affordable Pricing Plans</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fuga asperiores velit veniam alias. Beatae possimus repellat neque dolorum. Dolor.
            </p>
            </div>       

            <div className="blog-btn">
        <a href="">
        See More <span><FaArrowRight className='forward'/></span>
        </a>
    </div>
    </div> 


<div className="card-price">

<div className="card-content-one">
    <div className="content-img">
    <FaDesktop className='content-icon'/>
    </div>
    <div className="card-sub-title">
    <h4>Free Plan</h4>
    </div>
    <div className="card-title">
        <h1>00$</h1>
    </div>
    <div className="card-span">
        <span>Per Project</span>
    </div>
    <div className="hr">
    
    </div>
  
<div className="card-para-all">
    <p>150 Lorem, ipsum dolor </p>
    <p>20 Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    <h5>Free Lorem ipsum dolor sit.</h5>
</div>
<div className="card-btn">
        <a href="">
        Selected Plan 
        </a>
        </div>
</div>





<div className="card-content-one">
    <div className="content-img">
    <FaUser className='content-icon'/>
    </div>
    <div className="card-sub-title">
    <h4>Standard Plan</h4>
    </div>
    <div className="card-title">
        <h1>85$</h1>
    </div>
    <div className="card-span">
        <span>Per Project</span>
    </div>
    <div className="hr">
    
    </div>
  
<div className="card-para-all">
    <p>150 Lorem, ipsum dolor </p>
    <p>20 Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    <h5>Free Lorem ipsum dolor sit.</h5>
</div>
<div className="card-btn">
        <a href="">
        Selected Plan
        </a>
        </div>
</div>


<div className="card-content-two">
    <div className="content-img-two">
    <FaXbox className='content-icon-two'/>
    </div>
    <div className="card-sub-title-two">
    <h4>Pro Plan</h4>
    </div>
    <div className="card-title-two">
        <h1>150$</h1>
    </div>
    <div className="card-span-two">
        <span>Per Project</span>
    </div>
    <div className="hr-two">
        </div>
  
<div className="card-para-all-two">
    <p>150 Lorem, ipsum dolor </p>
    <p>20 Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    <h5>Free Lorem ipsum dolor sit.</h5>
</div>
<div className="card-btn-two">
        <a href="">
        Selected Plan
        </a>
        </div>
</div>


<div className="card-content-one">
    <div className="content-img">
    <FaBuilding className='content-icon'/>
    </div>
    <div className="card-sub-title">
    <h4>Ultimate Plan</h4>
    </div>
    <div className="card-title">
        <h1>210$</h1>
    </div>
    <div className="card-span">
        <span>Per Project</span>
    </div>
    <div className="hr">
    
    </div>
  
<div className="card-para-all">
    <p>150 Lorem, ipsum dolor </p>
    <p>20 Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    <h5>Free Lorem ipsum dolor sit.</h5>
</div>
<div className="card-btn">
        <a href="">
        Selected Plan
        </a>
        </div>
</div>


</div>

           
        </div>


    
    
    
    </>
  )
}

export default FullCard