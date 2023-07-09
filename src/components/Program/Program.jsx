import React from 'react'
import { programsData } from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png';

import './Program.css';

const Program = () => {
  return (
    <div className="programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>EXPLORE OUR</span>
            <span>Programs</span>
            <span className='stroke-text'>To share You</span>
        </div>

        {/* programs categories */}
        <div className="programs-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={rightArrow} alt='right arrow'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program