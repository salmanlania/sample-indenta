import React, { useEffect } from 'react'
import OurService from '../../components/OurService/Ourservice'
import { Button, Typography, Container, Grid, Paper } from '@mui/material';
// import './Services.css'
import TypingEffect from 'react-typing-effect';

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ServiceCards from './ServiceCards';

import bgImageTop from './images/bgImageTop.jpg'
import CreditCardBenifits from './CreditCardBenifits';

export const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Indenta';
  }, []);
  return (
    <div style={{ background: 'white' }}>
      <Navbar />
      <Paper
        elevation={5}
        sx={{
          p: 2,
          mb: 4,
          textAlign: 'center',
          width: '100vw',
          height: '40vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '2rem',
          background: 'linear-gradient(5deg, #44528B 30%, #8E24AA 90%)',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '4rem', color: 'white', mb: 1 }}>
          Our Services
        </Typography>
        <Typography
          variant="paragraph"
          component="div"
          sx={{
            color: 'white',
            textAlign: 'center',
            maxWidth: '60rem',
            fontSize: '22px',
          }}
        >
          <TypingEffect
            text={[
              'Indenta DSA stands as a leading financial and marketing consultancy, committed to delivering customer services across diverse channels within the financial industry.',
            ]}
            speed={30}
            eraseSpeed={25}
          />
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '100%', width: '100%',  }}>
        <Grid container  alignItems="stretch" justifyContent="space-between" sx={{ padding: '24px' }}>
          {/* Left Side (Image) */}
          <Grid item xs={12} md={6}>
            <img src={bgImageTop} alt="Service Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Grid>

          {/* Right Side (Button and Description) */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Credit Card</Typography>
            <Typography variant="body1" sx={{ fontSize: '1.4rem', }}>
              The Smart Choice for Credit Cards in the UAE. Indenta DSA– Your Ultimate
              Credit Card Companion
            </Typography>

            {/* Button */}
            <Button variant="contained" color="primary" sx={{ width: '15rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '3rem', fontSize: '1.2rem' }}>Start Now!</Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{  textAlign: 'center', width: '100vw', overflow: 'hidden', background: 'linear-gradient(1deg, #44528B 30%, #8E24AA 40%)', height: '3rem', display: 'flex', alignItems: 'center' , height : '4rem'}}>
        <Typography variant="h4" sx={{ margin: 'auto', color: 'white' }}>
          Consult our Expert: Book an Appointment Tab (CTA)
        </Typography>
      </Paper>

      <ServiceCards />

      <CreditCardBenifits />
      <Paper elevation={3} sx={{ mt: 4, textAlign: 'center', width: '98.5vw', overflow: 'hidden', background: 'linear-gradient(1deg, #44528B 30%, #8E24AA 40%)', height: '9rem', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent : 'center' , marginBottom: '1rem', gap : '1rem' , padding : '2rem' }}>
        <Typography variant="body1" sx={{ margin: 'auto', color: 'white', fontSize: '18px' }}>
          Our suite of products is dedicated to supporting you in achieving your financial
          objectives, whether it&#39;s basking in the sun during retirement or taking the first step
          towards your dream home. Indenta DSA is your partner on this journey – where
          financial goals become reality.
        </Typography> 
        <Button variant="contained" color="primary" sx={{background : '#FFBF00' }}>Learn More</Button>
      </Paper>

      {/* <hr /> */}

      {/* <OurService /> */}
      <Footer />
    </div>
  )
}

