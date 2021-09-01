import React from 'react';
import home1 from '../img/home1.png';
// import styled from 'styled-components';
import { About,Description,Hide,Image } from '../style';
import { motion } from 'framer-motion';

export default function AboutSection() {

    const titleAnimation = {
        hidden: {opacity: 0, x:50},
        transition: {duration:1.5},
        show: {opacity: 1, x:0 ,transition: {duration:0.75}}
    }
    const container = {
        
        show: { transition:{ duration: 1.5, ease: 'easeOut' , staggerChildren: 1}} 
    }
    return(
        <About>
            <Description>
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="tittle"
                >
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>you <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography onr videotape ideas that you have. We have protectional whit amazing skills</p>
                <button>Contact us.</button>
            </Description>
            <Image>
                <img alt='dude whit camera' src={home1}></img>
            </Image>
        </About>
    )
}
