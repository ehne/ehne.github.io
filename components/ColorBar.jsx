import React from 'react';
import { Box } from 'reflexbox';
import { color } from '../lib/baseColor';


const ColorBar = () => <Box
    sx={{
        width: '100%',
        height: '0.2em',
        backgroundImage: color('90deg'),
    }}
/>

export default ColorBar;
