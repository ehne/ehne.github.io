import React from 'react';
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform } from "framer-motion"
import circle from "../images/circle.svg"


const CircularText = () => {
    const { scrollY } = useViewportScroll()
    //const  cool = useTransform(scrollY, latest => -latest/7)
    return (
        <motion.img

            animate={{rotate: [50, -310]}}
            transition={{loop: Infinity,duration:15, ease: "linear"}}
            src={circle} class="circle">
        
      </motion.img>
    );
};



export default CircularText;
