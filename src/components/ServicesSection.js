import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () =>{
    return(
        <div className='services'>
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock}></img>
                            <h3>Efficient</h3>
                        </div>
                        <p>Ullamco consectetur ipsum enim culpa.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money}></img>
                            <h3>Money</h3>
                        </div>
                        <p>Cupidatat irure cillum eiusmod occaecat nulla aute et eiusmod eiusmod ullamco.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork}></img>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Velit magna aliquip elit mollit exercitation consequat magna ipsum.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm}></img>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Id dolor ex qui voluptate anim.</p>
                    </div>
                </div>
            </div>
            <div className='image'>
                <img src={home2} alt=''></img>
            </div>
        </div>

    );
}

export default ServicesSection;