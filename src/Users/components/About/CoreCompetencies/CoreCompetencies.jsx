import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import firstImage from './images/firstImage.jpg';
import secondImage from './images/secondImage.jpg';
import thirdImage from './images/thirdImage.jpg';
import fourthImage from './images/fourthImage.jpg';

// Initialize AOS outside the component
AOS.init({
  duration: 1000,
  once: false,
});

export const CoreCompetencies = () => {
  useEffect(() => {
    // Refresh AOS on component mount
    AOS.refresh();
  }, []);

  return (
    <Grid container >
      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem',  textAlign: 'center', width: '100vw', overflow: 'hidden', background: 'linear-gradient(1deg, #44528B 30%, #8E24AA 40%)', height: 'auto', p: '2rem', color: 'white' }}>
          <Typography variant="h3">Core Competencies</Typography>
          <Typography sx={{ textAlign: 'center', maxWidth: '80rem', fontSize: '17px' }}>
            We have a set of diverse knowledge and technical capacities that empower businesses to adeptly navigate the intricate needs of our clients. Through these competencies, we not only establish a lasting footprint but also cultivate a robust reputation and brand image, solidifying our position in the market.
          </Typography>
        </Paper>
      </Grid>

      {[
        { image: firstImage, title: 'Leadership', content: 'Leading by example, fostering relationships, and motivating teams to excel while being accountable for staff development and knowledge sharing.' },
        { image: secondImage, title: 'Client Focus', content: 'Placing customers first, ensuring positive experiences by understanding their needs and fortifying relationships.' },
        { image: thirdImage, title: 'Technology', content: 'Crafting robust technology infrastructure and staying updated with advancements.' },
        { image: fourthImage, title: 'Result Orientation', content: 'Achieving company goals by setting challenging targets, directing efforts accordingly, and surpassing expectations.' },
      ].map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={3} sx={{marginBottom : '1rem' , padding : '1rem'}}>
          <Card sx={{ width: '100%', height: '100%', backgroundColor: 'rgba(13, 36, 77, 0.9254901961)', color: 'white', overflow: 'hidden', borderRadius: '16px', position: 'relative', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <img style={{ width: '100%', height: 'auto', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', opacity : '0.3' }} src={item.image} alt={item.title} />
            <CardContent sx={{ padding: '1rem', position: 'absolute', bottom: '0', width: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</Typography>
              <Typography>{item.content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};