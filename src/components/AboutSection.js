import React from 'react';
import home1 from '../img/home1.png';
// import styled from 'styled-components';
import { About,Description,Hide,Image } from '../style';
import { motion } from 'framer-motion';
import { titleAnimation,fade,photoAnimation } from '../animation';
import Wave from './Wave';

export default function AboutSection() {

    return(
        <About>
            <Description>
                <div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>you <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Contact us for any photography onr videotape ideas that you have. We have protectional whit amazing skills</motion.p>
                <motion.button variants={fade}>Contact us.</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} alt='dude whit camera' src={home1}></motion.img>
            </Image>
            <Wave />
        </About>
    )
}
