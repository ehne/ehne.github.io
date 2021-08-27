import React from 'react';
import { Box } from 'reflexbox';
import { color } from '../lib/baseColor';

import NoSSR from './NoSSR';

const ColorBar = () => (
    <NoSSR>
        <Box
            sx={{
                width: '100%',
                height: '0.2em',
                backgroundImage: color('90deg'),
            }}
        />
    </NoSSR>
)
export default ColorBar;
