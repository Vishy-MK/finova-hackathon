// src/components/Stethoscope3D.js
import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Stethoscope3D.css';

const Stethoscope3D = () => {
  return (
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.05}
      gyroscope={true}
      className="stetho-tilt"
    >
      <div className="stetho-wrapper">
        <img src="mp.png" alt="vite-img" className='stetho-svg' />
      </div>
    </Tilt>
  );
};

export default Stethoscope3D;
