import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid } from '@mui/material';

import image1 from './cardImages/one.jpg';
import image2 from './cardImages/two.jpg';
import image3 from './cardImages/three.jpg';

const printCard = [
  {
    Cardtitle: 'Fleet Financing',
    cardText:
      'Swiftly reach your target customers and achieve results with our expertise.',
    image: image1,
  },
  {
    Cardtitle: 'SME Loans',
    cardText:
      'Indenta DSA provides economical solutions for every facet of your fleet management.',
    image: image2,
  },
  {
    Cardtitle: 'Trade Financing',
    cardText:
      'Indenta DSA arranges inventive trade and export finance solutions tailored to meet your requirements.',
    image: image3,
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
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
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
