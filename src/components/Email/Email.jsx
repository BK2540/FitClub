import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Email.css'

const Email = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7j6bn7b', 'template_xdn549h', form.current, 'ZXIJ86zQBg1RbHNUA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="email" id='join-us'>
        {/* left side */}
        <div className="left-e">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>

        {/* right side */}
        <div className="right-e">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='enter your email' />
                <button className='btn btn-e'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Email