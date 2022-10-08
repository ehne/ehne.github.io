import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { color as baseColor } from '../lib/baseColor';
import ColorBar from './ColorBar';


const absoluteFill = {
  position: 'fixed',
  top: 0,
  left: 0, 
  right: 0,
  bottom: 0,
};


const Layer = ({children, isFirstLoad}) => {
  const [color, setColor] = useState(`linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%)`);
  useEffect(()=> {
      setColor(baseColor('45deg'));
  }, []);

  return (
    <>
    <Link href="/" passHref scroll={false}>
      <a
        style={{
          ...absoluteFill,
          opacity: 0.70,
          zIndex: 2,
          backgroundImage: color,
          filter: 'brightness(0.5)',
          display: 'block',
        }}
        className="layer-bg"
      />
    </Link>
    <div
      key="layer"
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100%',
        overflow: 'scroll',
        zIndex: 3,
        backgroundColor: '#fff',
        display: "flex",
        alignItems: 'stretch'
      }}
      className="layer-card"
      >
      {children}
    </div>
    </>
  );
}

export default Layer;
