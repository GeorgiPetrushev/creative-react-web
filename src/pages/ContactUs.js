import React from 'react';
// Add Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () =>{
    return(
        <motion.h1 variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{backgroundColor: 'white'}}>Our Contact</motion.h1>
    )
}

export default ContactUs;