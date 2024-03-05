import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTextareaResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        boxShadow: '0px 20px 15px -3px rgba(0,0,0,0.1),0px -12px 15px -3px rgba(0,0,0,0.1)',
        width: '70%',
        padding: '1rem',
        margin: 'auto',
        alignItems: 'center',
        boxShadow: 'none'

      }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            label="Name"
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            sx={{width : '140%' }}
            InputProps={{ classes: { notchedOutline: 'no-border' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Phone Number"
            type="number"
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            sx={{width : '140%' }}
            InputProps={{ classes: { notchedOutline: 'no-border' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            type="email"
            onChange={(e) => handleInputChange('email', e.target.value)}
            sx={{width : '140%' }}
            InputProps={{ classes: { notchedOutline: 'no-border' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <textarea
            placeholder="Enter Your Message"
            aria-label="empty textarea"
            onChange={(e) => {
              handleInputChange('message', e.target.value);
              handleTextareaResize(e);
            }}
            value={formData.message}
            style={{
              padding: '0.8rem 0 0 0.7rem',
              width: '140%',
              maxWidth: '140%',
              resize: 'none',
              overflowY: 'hidden',
              background: 'transparent',
              fontSize : '1rem',
            }}
            rows={5}
            InputProps={{ classes: { notchedOutline: 'no-border' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              color: 'black',
              border: '1px solid black',
              width: '140%',
              height: 'auto',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#2B4742',
                color: 'white',
                cursor: 'pointer',
              },
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>

        </Grid>
      </Grid>
    </Box>
  );
}
