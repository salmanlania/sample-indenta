import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import TypingEffect from 'react-typing-effect';
import video from './images/file.mp4';
import Navbar from '../../navbar/Navbar';

const Header = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <Container
        component="div"
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center',
          color: 'white',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          style={{
            marginBottom: '20px',
            color : 'white',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          Indenta
        </Typography>
        <TypingEffect
          speed={100}
          eraseSpeed={50}
          eraseDelay={1500}
          text={['Indenta DSA is a premier Direct Sales Agency and Consultancy in the heart of the UAE.']}
          onComplete={() => setIsTypingComplete(true)}
          style={{
            fontSize : '2rem'
          }}
        />
      </Container>
    </div>
  );
};

export default Header;
