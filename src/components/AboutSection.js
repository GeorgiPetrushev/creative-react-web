import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
    return(
        <div>
            <div className='description'>
                <div className='title'>
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>you <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography onr videography ideas that you have. We have protectional whit amazing skills</p>
                <button>Contact us.</button>
            </div>
            <div className='image'>
                <img alt='dude whit camera' src={home1}></img>
            </div>
        </div>
    )
}

export default AboutSection;