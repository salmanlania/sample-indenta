import React, { useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';
import video from './images/video2.mp4';

const HomeVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1, Math.min(1, 1 - scrollY / window.innerHeight));
      videoRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Paper
      elevation={0}
      square
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Paper>
  );
};

export default HomeVideo;
