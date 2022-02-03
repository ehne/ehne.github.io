import React from 'react';
import {Box} from 'reflexbox';
import Link from 'next/link';

import ColorBar from '../components/ColorBar';

const Error = () => {
    return (
        <>
            <br />
            <span style={{fontSize: '2em', fontWeight: '700'}}> 404</span>. 
            <br />
            The page you were looking for can't be found.
            {/* Links and stuff */}
            <Box paddingY="1em" as="ul">
                <li><a href="javascript:history.back()">Go back</a>.</li>
                <li>Go to <Link href="/">darcylf.me</Link>.</li>
            </Box>
            <ColorBar />
        </>
    );
}

export default Error;
