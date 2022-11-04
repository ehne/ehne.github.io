import React, { useEffect, useState } from 'react';
import { Box } from 'rebass';
import { color as baseColor } from '../lib/baseColor';

const ColorBar = ({ override = '', height = '0.2em', sx = {}}) => {
    const isNotOverride = override === '';
    const [color, setColor] = useState(isNotOverride ? `linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%)` : override);
    useEffect(()=> {
        if (isNotOverride) {
            setColor(baseColor('90deg'));
        } 
    }, []);

    return (
        <Box
            sx={{
                height,
                width: '100%',
                backgroundImage: color,
                ...sx
            }}
        />
    )
}

export default ColorBar;
