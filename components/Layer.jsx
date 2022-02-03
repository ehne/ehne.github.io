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

const variants = {
  'show': {
    x: ['100%', '0%']
  },
  'hide': {
    x: ['0%', '100%']
  },
};

const Layer = ({children, isFirstLoad}) => {
  const duration = isFirstLoad ? 0 : .400 ;
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
            opacity: 0.35,
            zIndex: 2,
            backgroundImage: color,
            filter: 'brightness(0.3)',
            display: 'block'
          }}
          animate={'show'}
          transition={{
            duration: duration*0.5,
            delay: duration*0.5,
          }}
          variants={{
            'show': {
              opacity: ['0%', '35%'],
            },
            'hide': {
              opacity: '0%'
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
          borderLeft: `4px solid ${baseColor('90deg', 'color')}`
        }}
        
        variants={variants}
        transition={{
          duration,
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
