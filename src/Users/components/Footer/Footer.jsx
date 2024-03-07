import * as React from 'react';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/system';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from './ContactForm/ContactForm';
import { useNavigate } from 'react-router-dom';

const footerDetailGetStart =
  "Let's Connect and Explore! We're excited to engage with you. Whether you're looking for innovative solutions, seamless transactions, or collaboration opportunities across industries, we're here to make it happen. Drop us a line, and let's embark on a journey of possibilities together!";

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledTextareaAutosize = styled(TextareaAutosize)(
  ({ theme }) => `
        box-sizing: border-box;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${
    theme.palette.mode === 'dark' ? grey[700] : grey[200]
  };
        box-shadow: 0px 2px 2px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[50]
  };
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
    theme.palette.mode === 'dark' ? blue[600] : blue[200]
  };
        }
        
        &:focus-visible {
          outline: 0;
        }
    `,
);

export default function Footer() {
  const naviagte = useNavigate()
  return (
    <section
      style={{
        background: '#DAD8D8',
        color: 'black',
      }}
    >
      <Grid container spacing={2} sx={{padding : '5rem'}}>
        <Grid item xs={12} md={4}>
          <Box sx={{display : 'flex' , flexDirection : 'column' , justifyContent : 'space-around' , gap : '1rem' , marginTop : '1.5rem' , maxWidth : '20rem'}}>
            <Typography variant="h6" sx={{fontWeight : '700'}}>Let's Connect</Typography>
            <Typography variant="body1" sx={{wordSpacing : '5px'}}>{footerDetailGetStart}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ marginTop: '2.3rem' }}>
            <List>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <LocationOnIcon sx={{ color: 'black' }} />
                <ListItemText
                  primary="Your Location"
                  sx={{
                    '&:hover': {
                      color: 'red',
                      transition: '1s',
                      cursor: 'pointer',
                      fontWeight : 'bold'
                    },
                  }}
                />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <PhoneIcon sx={{ color: 'black' }} />
                <ListItemText
                  primary="Your Phone Number"
                  sx={{
                    '&:hover': {
                      color: 'red',
                      transition: '1s',
                      cursor: 'pointer',
                      fontWeight : 'bold'
                    },
                  }}
                />
              </ListItem>

              {/* <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <PhoneIcon sx={{ color: 'black' }} />
                <ListItemText
                  primary="Your Phone Number"
                  sx={{
                    '&:hover': {
                      color: 'red',
                      transition: '1s',
                      cursor: 'pointer',
                    },
                  }}
                />
              </ListItem> */}

              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '1rem',
                  fontWeight : 'bold'
                }}
              >
                <EmailIcon sx={{ color: 'black' }} />
                <ListItemText
                  primary="Your Email Address"
                  sx={{
                    '&:hover': {
                      color: 'red',
                      transition: '1s',
                      cursor: 'pointer',
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <ContactForm />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: '1.5rem', opacity: '0.9', cursor: 'pointer' }}
      >
        <Grid item>
          <Typography
          onClick={()=>naviagte('/')}
            variant="body1"
            sx={{ cursor : 'pointer' , fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}
          >
            Home
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}
          >
            Sitemap
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}
          >
            Terms & Conditions
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontSize: '0.9rem', '&:hover': { color: 'red', transition: '1s' } }}
          >
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: '.5rem', opacity: '0.9' , padding : '4rem' , backgroundColor : '#2B4742'}}
      >
        <Grid item>
          <Typography variant="body1" sx={{ fontSize: '1rem' , color : 'white'}}>
            &#169; 2024 Indenta
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
