import React from 'react';
import './MiniCard.css';
import { FaLightbulb , FaUser, FaBriefcase } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';

const MiniCard = () => {
  return (
    <>
    <div className='mini-card' id="mini-card">
        <div className="card-mini">
            <div className="card-all">
                <div className="mini-content">
                    <div className="mini-img">
                        <FaLightbulb className='mini-icon'/>
                    </div>
                    <div className="mini-heading">
                        <h1>50+</h1>
                    </div>
                    <div className="mini-span">
                        <h3>Finished Projects</h3>
                    </div>

                </div>

                
            </div>




            <div className="card-all">
                <div className="mini-content">
                    <div className="mini-img">
                        <FaBriefcase className='mini-icon'/>
                    </div>
                    <div className="mini-heading">
                        <h1>50+</h1>
                    </div>
                    <div className="mini-span">
                        <h3>Created Jobs</h3>
                    </div>

                </div>

                
            </div>


            <div className="card-all">
                <div className="mini-content">
                    <div className="mini-img">
                        <FaUser className='mini-icon'/>
                    </div>
                    <div className="mini-heading">
                        <h1>150+</h1>
                    </div>
                    <div className="mini-span">
                        <h3>Happy Customers</h3>
                    </div>

                </div>

                
            </div>


            <div className="card-all">
                <div className="mini-content">
                    <div className="mini-img">
                        <AiOutlineArrowDown className='mini-icon'/>
                    </div>
                    <div className="mini-heading">
                        <h1>2+</h1>
                    </div>
                    <div className="mini-span">
                        <h3>Years Of Experience</h3>
                    </div>

                </div>

                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default MiniCard