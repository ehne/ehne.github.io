import React, { useState, useEffect } from 'react';
import {m} from 'framer-motion';
import Link from 'next/link';
import { color as baseColor } from '../lib/baseColor';


const absoluteFill = {
  position: 'fixed',
  top: 0,
  left: 0, 
  right: 0,
  bottom: 0,
};


const Layer = ({children, isFirstLoad}) => {
  const duration = isFirstLoad ? 0 : .400;
  const bgTransition = (t) => ({
    duration: t*0.5,
    delay: t*0.5,
  });
  const layerTransition = (t) => ({ duration: t });

  const [color, setColor] = useState(`linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%)`);
  useEffect(()=> {
      setColor(baseColor('45deg'));
  }, []);

  return (
    <>
      <Link href="/" passHref scroll={false}>
        <m.a
          style={{
            ...absoluteFill,
            opacity: 0.70,
            zIndex: 2,
            backgroundImage: color,
            filter: 'brightness(0.5)',
            display: 'block',
          }}
          animate="show"
          variants={{
            'show': {
              opacity: ['0%', '70%'],
              transition: bgTransition(duration)
            },
            'hide': {
              opacity: '0%',
              transition: bgTransition(.400)
            }
          }}
          exit="hide"
        />
      </Link>
      
      <m.div
        key="layer"
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100%',
          overflow: 'scroll',
          zIndex: 3,
          backgroundColor: '#fff',
        }}
        variants={{
          'show': {
            x: ['100%', '0%'],
            transition: layerTransition(duration),
          },
          'hide': {
            x: ['0%', '100%'],
            transition: layerTransition(.400),
          },
        }}
        animate='show'
        exit="hide"
      >
        {children}
      </m.div>
    </>
  );
}

export default Layer;
