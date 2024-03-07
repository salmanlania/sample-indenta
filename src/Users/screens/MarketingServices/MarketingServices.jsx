import React, { useEffect } from 'react';
import { Button, Card, CardContent, Typography, Container, Paper, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MarketingBg from './Images/marketingBg.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TypingEffect from 'react-typing-effect';

import ServiceCards from './ServiceCards';

export const MarketingServices = () => {
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
                                    Marketing Services
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
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Offered Services Section */}
                    <Grid item xs={12} sx={{ marginBottom: '1.4rem' }}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                maxWidth: '68rem',
                                margin: 'auto',
                                padding: '2rem',
                                display: 'flex',
                                background: 'transparent',
                                flexDirection: 'column',
                                boxShadow: 'none',
                                gap: '2rem',

                            }}
                            data-aos="fade-up-right"
                            data-aos-duration="500"
                        >
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                Consult our Expert: Book an Appointment Tab (CTA)
                                <br />
                                <br />
                                Our Offered Services
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                                Indenta DSA revolves around devising and executing marketing strategies centered on the core of your business. Our commitment extends beyond strategy implementation – we provide steadfast support to help you achieve your business goals and objectives.
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
