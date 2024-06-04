

import React from 'react';
import "./projects.css"


function ScoundSec() {

    return (
        <div className='sc2'>
            <div className='all-sec2 row'>
                <div className='leftSec-sec2 col-md-6 col-12' data-aos="zoom-in">
                    {/* <ScrollAnimation animateIn="fadeIn" className='scrolD' >
                        <img src="/images/photo/vecteezy_office-work-equipment-pc-gadget-social-media_9636717.png" className='imgLeftSec' alt="" />
                    </ScrollAnimation> */}
                    <img src="/images/photo/vecteezy_office-work-equipment-pc-gadget-social-media_9636717.png" className='imgLeftSec' alt="" />
                </div>
                <div className='rightSec-sec2 col-md-6 col-12'>
                    <p className='pRightSec'>Get In Touch</p>
                    <div className='d-flex row gap-4'>
                        <input type="text" className='txt-sec2 col-lg-6 col-md-12 col-6' placeholder='First Name' />
                        <input type="text" className='txt-sec2 col-lg col-md-12 col' placeholder='Last Name' />
                        <input type="text" className='txt-sec2 col-lg-6 col-12' placeholder='Email Address' />
                        <input type="text" className='txt-sec2 col-lg col-12' placeholder='Phone Number' />
                        <textarea className='txt-sec2 txtArea-sec2 col-12' placeholder='Phone Number' />
                        <button className='btn-sec2'>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ScoundSec;





