import React from 'react';
import './Blog.css';
import { FaArrowRight } from 'react-icons/fa';
import Image  from '../images/3.png';
import Image1  from '../images/2.png';
import Image2  from '../images/6.png';


const Blog = () => {
  return (
    <>
    <div className="blog" id="blog">
    <div className="container-about">
    <p> <span>.</span>Portfolio<span>.</span></p>
</div>
    <div className="blog-container">
        <div className="blog-heading">
            <h1>Awesome Portfolio</h1>
            </div>       

            <div className="blog-btn">
        <a href="">
        See More <span><FaArrowRight className='forward'/></span>
        </a>
    </div>
    </div>

<div className="blog-anchor">
    <a href="" className='all'>All</a>
    <a href="">WebDevelopment</a>
    <a href="">Frontend</a>
    <a href="">Backend</a>
    <a href="">Hosting</a>
</div>

<div className="card-content">
<div className="card-blog">
    <div className="blog-one">
        <img src={Image} alt="" />
    </div>
</div>

<div className="card-blog1">
    <div className="blog-one">
        <img src={Image2} alt="" />
    </div>
</div>

<div className="card-blog2">
    <div className="blog-one">
        <img src={Image1} alt="" />
    </div>
</div>


<div className="card-blog3">
    <div className="blog-one">
        <img src={Image2} alt="" />
    </div>
</div>


<div className="card-blog4">
    <div className="blog-one">
        <img src={Image1} alt="" />
    </div>
</div>


<div className="card-blog5">
    <div className="blog-one">
        <img src={Image} alt="" />
    </div>
</div>
</div>

    </div>
    
    
    
    
    </>
  )
}

export default Blog