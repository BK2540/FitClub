import React from 'react'

import './Reason.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className="reason" id='reasons'>
        {/* left side */}
        <div className='reason-l'>
            <img src={image1} alt="image" />
            <img src={image2} alt="image" />
            <img src={image3} alt="image" />
            <img src={image4} alt="image" />
        </div>
        {/* right side */}
        <div className='reason-r'>
            <span>SOME REASONS</span>

            <div>
                <span className='stroke-text'>why</span>
                <span>choose us?</span>
            </div>

            <div className='details-r'>
            <div>
                <img src={tick} alt="tick"/>
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
                <img src={tick} alt="tick"/>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={tick} alt="tick"/>
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src={tick} alt="tick"/>
                <span>RELIABLE PARTNERS</span>
            </div>
            </div>

        <span style={{color: 'var(--gray)', fontWeight: 'normal',}}>
            Our partners
        </span>

        <div className="partners">
            <img src={nb} alt="nb" />
            <img src={adidas} alt="adidas" />
            <img src={nike} alt="nike" />
        </div>

        </div>
    </div>
  )
}

export default Reasons