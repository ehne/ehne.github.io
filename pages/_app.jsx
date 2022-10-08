import * as React from 'react';

import '../lib/styles.css';
import Head from 'next/head';
import {Box} from 'rebass';
import { Provider as ReakitProvider } from 'reakit';
import PageTransition from '../components/PageTransition';

import { usePanelbear } from '../lib/usePanelbear';
import { useRouter } from 'next/router';
import { CSSTransition, SwitchTransition } from 'react-transition-group';



const AppContainer = ({ Component, pageProps }) => {
    usePanelbear('CPwwSVDDRs3', {
        // Uncomment to allow sending events on localhost, and log to console too.
        // debug: true
    });
    const [isFirstLoad, setIsFirstLoad] = React.useState(true);
    const [oldKey, setOldKey] = React.useState(undefined);
    const router = useRouter();
    const key = router.pathname;
    const [anim, setAnim] = React.useState(router.pathname.includes('work') ? 'card-show': 'card-hide');
    const oldCardRef = React.useRef(undefined);

    React.useEffect(() => {
        setOldKey(key);
    }, [])

    React.useEffect(() => {
        console.log(anim)
    }, [anim])

    const oldCard = oldCardRef.current || <Component {...pageProps}  key={key} isFirstLoad={isFirstLoad} />;
    const ret = <Component {...pageProps}  key={key} isFirstLoad={isFirstLoad} />;
    oldCardRef.current = oldCard;

    React.useEffect(() => {
        const handleStop = () => {
            console.log('loaded');
            setIsFirstLoad(false);
            setOldKey(key);
            oldCardRef.current = <Component {...pageProps}  key={key} isFirstLoad={isFirstLoad} />;
            if (!router.pathname.includes('work')) {
                setAnim('card-to-show');
            } else {
                setAnim('card-to-hide');
            }
        }
        const handleStart = () => {
        }
    
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)
        router.events.on('routeChangeStart', handleStart)
    
        return () => {
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
            router.events.off('routeChangeStart', handleStart)
        }
    }, [router, key])

    

    const onAnimationEnd = () => {
        if (anim === 'card-to-hide') {
            setOldKey(key)
            console.log("OHOHO")
            setAnim('card-hide');
        } else if (anim === 'card-to-show') {
            setOldKey(key)
            setAnim('card-show')
        }
    }
    
    const isCurr =  anim !== 'card-loading' || anim === 'card-to-hide';
    return (
        <>
            <Head>
                <title>darcy has a good website</title>
                {/* <link
                    href="https://cdn.jsdelivr.net/gh/sharanda/manrope@1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/web/index.css"
                    rel="stylesheet"
                /> */}

                <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />                 
                <meta name="description" content="Hi! I'm Darcy, a web designer and developer based in Melbourne"/>
                
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://darcylf.me/"/>
                <meta property="og:title" content="darcy has the best website"/>
                <meta property="og:description" content="Hi! I'm Darcy, a web designer and developer based in Melbourne"/>
                <meta property="og:image" content="https://og.darcylf.me/image.js?text=&theme=darcylf"/>
                
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://darcylf.me/"/>
                <meta property="twitter:title" content="darcy has the best website"/>
                <meta property="twitter:description" content="Hi! I'm Darcy, a web designer and developer based in Melbourne"/>
                <meta property="twitter:image" content="https://og.darcylf.me/image.js?text=&theme=darcylf"></meta>
                
                
                <link rel="icon" href="/favicon-32x32.png?v=a0dabc26a47e10521f7551a44f55c7b4" type="image/png"/>
                <meta name="theme-color" content="#ffc53f"/>
                
                <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=a0dabc26a47e10521f7551a44f55c7b4"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=a0dabc26a47e10521f7551a44f55c7b4"/>
                <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=a0dabc26a47e10521f7551a44f55c7b4"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=a0dabc26a47e10521f7551a44f55c7b4"/>
                <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=a0dabc26a47e10521f7551a44f55c7b4"/>
                <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=a0dabc26a47e10521f7551a44f55c7b4"/>
                <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=a0dabc26a47e10521f7551a44f55c7b4"/
                ><link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=a0dabc26a47e10521f7551a44f55c7b4"/>
            </Head>
            <ReakitProvider>
                        <Box sx={{
                            maxWidth: ['32em','34em'],
                            padding: ['1em', '2em']
                        }} 
                        key={router.route}
                        className={anim} 
                        onAnimationEnd={onAnimationEnd}
                        >   
                            {isCurr ? ret : oldCard}
                        </Box>
            </ReakitProvider>
        </>
    )
}

export default AppContainer