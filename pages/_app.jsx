import * as React from 'react';

import '../lib/styles.css';
import Head from 'next/head';
import {Box} from 'reflexbox';

import { usePanelbear } from '../lib/usePanelbear';


const AppContainer = ({ Component, pageProps }) => {
    usePanelbear('CPwwSVDDRs3', {
        // Uncomment to allow sending events on localhost, and log to console too.
        // debug: true
    });
    return (
        <>
            <Head>
                <title>darcy has a good website</title>
                {/* <link
                    href="https://cdn.jsdelivr.net/gh/sharanda/manrope@1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/web/index.css"
                    rel="stylesheet"
                /> */}
                <link href="https://fonts.darcylf.me/css?family=EB%20Garamond:ital,wght@0,400;1,400;0,700;1,700;0,800;1,800&display=swap" rel="stylesheet" />
                
                
                <meta name="description" content="Hi! I'm Darcy Lugt-Falk, a web designer and developer based in Melbourne"/>
                
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://darcylf.me/"/>
                <meta property="og:title" content="darcy has the best website"/>
                <meta property="og:description" content="Hi! I'm Darcy Lugt-Falk, a web designer and developer based in Melbourne"/>
                <meta property="og:image" content="https://og.darcylf.me/image.js?text=&theme=darcylf"/>
                
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://darcylf.me/"/>
                <meta property="twitter:title" content="darcy has the best website"/>
                <meta property="twitter:description" content="Hi! I'm Darcy Lugt-Falk, a web designer and developer based in Melbourne"/>
                <meta property="twitter:image" content="https://og.darcylf.me/image.js?text=&theme=darcylf"></meta>

            </Head>
            <Box padding={['1em','2em']}>
                <Box sx={{
                    maxWidth: '30em'
                }}>
                    <Component {...pageProps}/>
                </Box>
            </Box>
        </>
    )
}

export default AppContainer