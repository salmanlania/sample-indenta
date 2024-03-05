import React, { useEffect } from 'react';
import { Button, Card, CardContent, Typography, Container, Paper, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MarketingBg from './Images/marketingBg.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TypingEffect from 'react-typing-effect';

import ServiceCards from './ServiceCards';

export const CorporateServices = () => {
    useEffect(() => {
        document.title = 'Marketing Services | Indenta';
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
        <div>
            <Navbar />
            <br />
            <Paper>
                <Grid container >
                    {/* Marketing Services Header */}
                    <Grid item xs={12}>
                        <Card
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
                            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }} data-aos="fade-up" data-aos-duration="2000">
                                <Typography variant="h2" sx={{ fontWeight: 800, color: 'white', textAlign: 'center' }}>
                                    Corporate Services
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
                                            'Indenta DSA streamlines financial products to foster the expansion of businesses. Our firm provides an array of solutions designed for small and medium enterprises aiming to enhance their financial prowess.',
                                        ]}
                                        speed={30}
                                        eraseSpeed={25}
                                    />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Consultation Section */}
                    <Grid item xs={12} sm={4} md={4} >
                        <Card sx={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '2rem', alignItems: 'center', width: '100vw', }} data-aos="fade-up" data-aos-duration="200">
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                Consult our Expert
                            </Typography>
                            <Button variant="contained" color="primary" sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                color: 'white',
                                outline: 'none',
                                border: 'none',
                                width: '15em',
                                borderRadius: '4rem',
                                height: '3em',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                Book an Appointment
                            </Button>
                        </Card>
                    </Grid>



                    {/* Offered Services Section */}
                    <Grid item xs={12} sx={{ background: '#23568B', marginBottom: '1.4rem' }}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                maxWidth: '68rem',
                                margin: 'auto',
                                color: 'white',
                                padding: '2rem',
                                display: 'flex',
                                background: 'transparent',
                                flexDirection: 'column',
                                gap: '2rem',

                            }}
                            data-aos="fade-up-right"
                            data-aos-duration="500"
                        >
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                Our Offered Services
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                                Indenta DSA is consistently aligned with the nature of financial needs, and therefore, we deliver an extensive range of services with continually adaptive management. We precisely assess our customers’ financial situations, guiding them towards the realization of their financial objectives.
                            </Typography>
                        </Card>
                    </Grid>

                    <ServiceCards />

                </Grid>
            </Paper>
            <Footer />
        </div>
    );
};
