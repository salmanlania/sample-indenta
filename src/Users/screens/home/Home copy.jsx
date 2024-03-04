import React, { useEffect, useRef } from 'react';
import './Home.css';
import Header from '../../components/Home/header/Header';
import WhyChooseUs from '../../components/Home/WhyChooseUs/WhyChooseUs';
import HomeVideo from '../../components/Home/HomeVideo/HomeVideo';
import WhyIndentaDSA from '../../components/Home/WhyIndentaDSA/WhyIndentaDSA';
import IndentaInfo from '../../components/Home/indentaInfo/indentaInfo';
import Popular from '../../components/Home/Popular/Popular';
import Careers from '../../components/Home/Careers/Careers'

import Navbar from '../../components/navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import video from './assests/file.mp4'

export const Home = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    document.title = 'Home | Indenta';

    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const containerStyle = {
    position: 'relative',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1,
  };

  const headerStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2,
  };
  return (
    <div style={containerStyle}>
      <video ref={videoRef} controls={false} autoPlay loop muted style={videoStyle}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar style={navbarStyle} />
      <Header style={headerStyle} />
      <WhyChooseUs className='WhyChooseUs' />
      <IndentaInfo />
      <WhyIndentaDSA />
      <Careers />
      <Footer />
    </div>
  )
}