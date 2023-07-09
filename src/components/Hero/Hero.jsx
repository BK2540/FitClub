import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = {type:"spring", duration:"3"}
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className='hero' id='home'>

      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
{/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? '160px' : '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                
                ></motion.div>
                <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>
           {/* Hero heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>SHAPE</span>
                <span> YOUR</span>
              </div>
              <div>
                <span>IDEAL BODY</span>
              </div>
              <div className="span">
                <span>
                  In here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
              </div>
            </div> 
            {/* figure */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' prefix='+'/>
                </span>
                <span>EXPERT COACHES</span>
              </div>
              <div>
                <span><NumberCounter end={978} start={900} delay='4' prefix='+'/></span>
                <span>MEMBERS JOINED</span>
              </div>
              <div>
                <span><NumberCounter end={50} start={30} delay='4' prefix='+'/></span>
                <span>FITNESS PROGRAMS</span>
              </div>
            </div>

            {/* hero button */}
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>

        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{left: mobile? '1rem' : '8rem'}}
            transition={{...transition, type: 'tween'}}

            className="heart-rate">
              <img src={Heart} alt='heart'/>
              <span>Heart Rate</span>
              <span>116 bpm</span>
            </motion.div>

            {/* hero image */}
            <img src={hero_image} alt='hero image' className='hero-image'/>
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={{...transition, type: 'tween'}}

            src={hero_image_back} alt='hero image' className='hero-image-back'/>

            {/* carolies */}
            <motion.div
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={{...transition, type: 'tween'}}

            className="calories">
              <img src={Calories} alt='calories'/>
              <div>
               <span>Calories burned</span>
              <span>220 kcal</span> 
              </div>
              
            </motion.div>
        </div>
    </div>
  )
}

export default Hero