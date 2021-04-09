import React from 'react';
import {Box} from "rebass"

import CoverWithSlide from "./coverWithSlide"

const Socials = () => (
    <Box
    paddingTop="0.7em"
    fontSize="0.8em"
    >
         <a href="https://github.com/ehne">github</a> — <CoverWithSlide to="/contact/" direction="left" >contact</CoverWithSlide>
    </Box>
)

export default Socials

