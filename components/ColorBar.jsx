import React, { useEffect, useState } from 'react';
import { Box } from 'reflexbox';
import { color as baseColor } from '../lib/baseColor';

import NoSSR from './NoSSR';

const ColorBar = () => {
    const [color, setColor] = useState(`linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%)`);
    useEffect(()=> {
        setColor(baseColor('90deg'));
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '0.2em',
                backgroundImage: color,
            }}
        />
    )
}

export default ColorBar;
