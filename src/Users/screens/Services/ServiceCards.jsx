import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid } from '@mui/material';

import image1 from './cardImages/one.jpg';
import image2 from './cardImages/two.jpg';
import image3 from './cardImages/three.jpg';
import image4 from './cardImages/four.jfif';

const printCard = [
  {
    Cardtitle: 'Empower Your Financial Journey Today. Secure the Ideal Credit Card Now!',
    cardText:
      'Indenta DSA stands as your reliable partner in navigating the world of credit cards in the UAE. Follow these steps to secure the perfect credit card tailored to your needs.',
    image: image1,
  },
  {
    Cardtitle: 'Explore Our Array of Credit Card Options:',
    cardText:
      'Make an informed decision by comparing the options available. Indenta DSA empowers you to choose the credit card that aligns seamlessly with your lifestyle, offering a transparent view of the terms, benefits, and exclusive features associated with each option.',
    image: image2,
  },
  {
    Cardtitle: 'Compare and Select Your Ideal Credit Card:',
    cardText:
      'Make an informed decision by comparing the options available. Indenta DSA empowers you to choose the credit card that aligns seamlessly with your lifestyle, offering a transparent view of the terms, benefits, and exclusive features associated with each option.',
    image: image3,
  },
  {
    Cardtitle: 'Swiftly Apply and Acquire Your Chosen Card:',
    cardText:
      'Seize control of your financial destiny by applying for your selected credit card. Indenta DSA streamlines the application process, providing you with a hassle-free',
    image: image4,
  },
];

const ServiceCards = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {printCard.map((card, index) => (
        <Grid key={card.Cardtitle} item xs={12}>
          <Card style={{ height: '100%' }}>
            <Grid container>
              <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' , alignItems : 'center' }}>
                  <Typography variant="h5" gutterBottom style={{ fontSize: '2rem' }}>
                    {card.Cardtitle}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" style={{ textAlign: 'center' }}>
                    {card.cardText}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceCards;
