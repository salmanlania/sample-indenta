import React, { useEffect } from 'react'
import OurService from '../../components/OurService/Ourservice'
import { Button, Typography, Container, Grid, Paper, Card, CardContent } from '@mui/material';
// import './Services.css'
import TypingEffect from 'react-typing-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ServiceCards from './ServiceCards';

import CreditCardBenifits from './CreditCardBenifits';

export const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Indenta';
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);
  return (
    <div style={{ background: 'white' }}>
      <Navbar />
      <br />
      <br />
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          textAlign: 'center',
          width: '100vw',
          height: '75vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '2rem',
          background: '#2B4742',
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

      {/* <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '100%', width: '100%',  }}>
        <Grid container  alignItems="stretch" justifyContent="space-between" sx={{ padding: '24px' }}>
          <Grid item xs={12} md={6}>
            <img src={bgImageTop} alt="Service Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Credit Card</Typography>
            <Typography variant="body1" sx={{ fontSize: '1.4rem', }}>
              The Smart Choice for Credit Cards in the UAE. Indenta DSA– Your Ultimate
              Credit Card Companion
            </Typography>
            <Button variant="contained" color="primary" sx={{ width: '15rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '3rem', fontSize: '1.2rem' }}>Start Now!</Button>
          </Grid>
        </Grid>
      </Paper> */}

      {/* <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '8px',
        }}
        data-aos="fade-up"
        data-aos-duration="1500"
      > */}
      {/* <CardContent> */}
      {/* <Typography variant="h4" sx={{textAlign : 'center' , fontWeight : 'bold'}}>
            The Smart Choice for Credit Cards in the UAE. Indenta DSA– Your Ultimate Credit Card Companion
          </Typography> */}
      {/* <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: '20px' }}
          >
            Start Now <span style={{ marginLeft: '7px', fontSize: '1.6rem' }}>!</span>
          </Button> */}
      {/* </CardContent> */}
      {/* </Card> */}

      {/* <Paper elevation={3} sx={{ textAlign: 'center', width: '100vw', overflow: 'hidden', height: '3rem', display: 'flex', alignItems: 'center', height: '4rem' }}>
        <Typography variant="h4" sx={{ margin: 'auto', fontWeight: 'bold', marginBottom: '4rem', marginTop: '4rem' }}>
          Consult our Expert: Book an Appointment Tab (CTA)
        </Typography>
      </Paper> */}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <ServiceCards />
        <CreditCardBenifits />
      </div>

      <Paper elevation={3} sx={{ mt: 4, textAlign: 'center', width: '98.5vw', overflow: 'hidden', height: '9rem', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', marginBottom: '1rem', gap: '1rem', padding: '2rem' }}>
        <Typography variant="body1" sx={{ margin: 'auto', fontSize: '18px' }}>
          Our suite of products is dedicated to supporting you in achieving your financial
          objectives, whether it&#39;s basking in the sun during retirement or taking the first step
          towards your dream home. Indenta DSA is your partner on this journey – where
          financial goals become reality.
        </Typography>
        <Button variant="contained" color="primary" >Learn More</Button>
      </Paper>

      {/* <hr /> */}

      {/* <OurService /> */}
      <Footer />
    </div>
  )
}

