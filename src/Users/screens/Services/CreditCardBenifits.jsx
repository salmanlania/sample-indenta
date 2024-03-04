import React from 'react';
import { Typography, Paper, Container, Grid, Box } from '@mui/material';
import One from './images/1.png';
import Two from './images/2.png';
import Three from './images/3.png';
import Four from './images/4.png';
import Five from './images/5.png';

const CreditCardBenefits = () => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <Paper elevation={3} sx={{ textAlign: 'center', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, p: 1, background: 'linear-gradient(1deg, #44528B 30%, #8E24AA 40%)' }}>
        <Typography variant="h5" sx={{ color: 'white' }}>
          Benefits of Using a Credit Card
        </Typography>
      </Paper>
      <Container>

        <Grid container >
          <Grid item xs={12} md={6} lg={6}>
            <section sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: { xs: 0, md: '17rem' }, marginTop: '2rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={One} alt="" width="60" height="70" />
                <Typography variant="h5">Make Purchases Easily</Typography>
              </Box>
              <Typography variant="body1" sx={{ justifyContent: 'center', marginLeft: { xs: 0, md: '5rem' }, maxWidth: { xs: '100%', md: '20rem' } }}>
                Enjoy seamless transactions and the convenience of cashless payments.
              </Typography>
            </section>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <section sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={Two} alt="" width="60" height="70" />
                <Typography variant="h5">Earn Rewards</Typography>
              </Box>
              <Typography variant="body1" sx={{ justifyContent: 'center', marginLeft: { xs: 0, md: '5rem' }, maxWidth: { xs: '100%', md: '20rem' } }}>
                Maximize your spending with enticing rewards and cashback offers.
              </Typography>
            </section>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={6}>
            <section sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: { xs: 0, md: '17rem' }, marginTop: '2rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={Three} alt="" width="60" height="70" />
                <Typography variant="h5">Build Credit</Typography>
              </Box>
              <Typography variant="body1" sx={{ justifyContent: 'center', marginLeft: { xs: 0, md: '5rem' }, maxWidth: { xs: '100%', md: '20rem' } }}>
                Establish and strengthen your credit history for a secure financial future.
              </Typography>
            </section>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <section sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={Four} alt="" width="60" height="70" />
                <Typography variant="h5">Tackle Emergency Expenses</Typography>
              </Box>
              <Typography variant="body1" sx={{ justifyContent: 'center', marginLeft: { xs: 0, md: '5rem' }, maxWidth: { xs: '100%', md: '20rem' } }}>
                Be prepared for unexpected situations with the financial flexibility of a credit card.
              </Typography>
            </section>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={6}>
            <section sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: { xs: 0, md: '17rem' }, marginTop: '2rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={Five} alt="" width="60" height="70" />
                <Typography variant="h5">Spend Safely</Typography>
              </Box>
              <Typography variant="body1" sx={{ justifyContent: 'center', marginLeft: { xs: 0, md: '5rem' }, maxWidth: { xs: '100%', md: '20rem' } }}>
                Benefit from enhanced security features, ensuring safe and secure transactions.
              </Typography>
            </section>
          </Grid>
        </Grid>

        
      </Container>
    </div>
  );
}

export default CreditCardBenefits;
