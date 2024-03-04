import React from 'react'
import { Grid, Typography, Button, Card, CardContent, Paper } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import TypingEffect from 'react-typing-effect';

export default function Careers() {
    return (
        <div>
            <Navbar />
            <Grid>
                <Grid item xs={12}>
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
                            Careers at Indenta DSA
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
                                    'Join Indenta DSA and embark on your journey to excellence. We transform individuals into skilled professionals and offer prime opportunities for career growth.',
                                ]}
                                speed={30}
                                eraseSpeed={25}
                            />
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ textAlign: 'center', width: '100vw', overflow: 'hidden', background: 'linear-gradient(1deg, #44528B 30%, #8E24AA 40%)', height: '3rem', display: 'flex', alignItems: 'center', height: '4rem' }}>
                        <Typography variant="h5" sx={{ margin: 'auto', color: 'white' }}>
                            Consult our Expert: Book an Appointment Tab (CTA)
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Are you interested in becoming a part of Indenta DSA?
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        Indenta DSA embodies dynamism with a lively and passionate team. Join us in this dynamic journey!
                    </Typography>
                    <Button variant="contained" color="primary">
                        Apply Now
                    </Button>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}
