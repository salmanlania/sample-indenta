import React, { useEffect } from 'react';
import { Button, Typography, Container, Grid, Paper } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useNavigate, Outlet } from 'react-router-dom';

import MarketingServicesImage from './images/MarketingServices.jpg';
import ConsumerServicesImage from './images/consumerServices.png';
import CorporateServicesImage from './images/CorporateServices.jpg';

const serviceObj = {
    marketService: {
        imgs: `${MarketingServicesImage}`,
        heading: 'Marketing Services',
        description: 'Indenta DSA Marketing Services offers holistic support in financial marketing, leveraging a team of skilled marketers dedicated to applying the most effective strategies.',
        button: 'Learn More',
    },
    consumerService: {
        imgs: `${ConsumerServicesImage}`,
        heading: 'Consumer Services',
        description: 'Indenta DSA Consumer Services has extensive experience in the industry, making us well-acquainted with your needs. We specialize in offering a range of services, including auto loans, mortgage loans, credit cards, and insurance, tailored to meet your requirements.',
        button: 'Learn More',
    },
    corporateService: {
        imgs: `${CorporateServicesImage}`,
        heading: 'Corporate Services',
        description: 'Indenta DSA streamlines financial products to foster the expansion of businesses. Our firm provides an array of solutions designed for small and medium enterprises aiming to enhance their financial prowess.',
        button: 'Learn More',
    },
}
const OurService = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
        window.addEventListener('scroll', AOS.refresh);
        return () => {
            window.removeEventListener('scroll', AOS.refresh);
        };
    }, []);

    const navigate = useNavigate();

    return (
        <Container sx={{ textAlign: 'center', padding: '0 !important', marginRight: '14rem' }}>
            <Container sx={{ marginLeft: '3rem' }}>
                {/* MARKETING */}
                <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '100%', width: '100%', mb: '2em' }}>
                    <Grid container spacing={2} alignItems="stretch" justifyContent="space-between" sx={{ padding: '20px' }}>
                        {/* Left Side (Image) */}
                        <Grid item xs={12} md={6}>
                            <img src={serviceObj.marketService.imgs} alt="Service Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>

                        {/* Right Side (Button and Description) */}
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                            <Typography variant="h4">{serviceObj.marketService.heading}</Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>{serviceObj.marketService.description}</Typography>

                            {/* Button */}
                            <Button variant="contained" color="primary" sx={{ width: '15rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '3rem', fontSize: '1.2rem' }}>{serviceObj.marketService.button}</Button>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Consumer */}
                <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '100%', width: '100%', mb: '2em' }}>
                    <Grid container spacing={2} alignItems="stretch" justifyContent="space-between" sx={{ padding: '20px' }}>
                        {/* Left Side (Image) */}
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                            <Typography variant="h4">{serviceObj.consumerService.heading}</Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>{serviceObj.consumerService.description}</Typography>

                            {/* Button */}
                            <Button variant="contained" color="primary" sx={{ width: '15rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '3rem', fontSize: '1.2rem' }}>{serviceObj.consumerService.button}</Button>
                        </Grid>
                        {/* Right Side (Button and Description) */}
                        <Grid item xs={12} md={6}>
                            <img src={serviceObj.consumerService.imgs} alt="Service Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>
                    </Grid>
                </Paper>

                {/* Corporate */}
                <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '100%', width: '100%', mb: '2em' }}>
                    <Grid container spacing={2} alignItems="stretch" justifyContent="space-between" sx={{ padding: '20px' }}>
                        {/* Left Side (Image) */}
                        <Grid item xs={12} md={6}>
                            <img src={serviceObj.corporateService.imgs} alt="Service Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Grid>

                        {/* Right Side (Button and Description) */}
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                            <Typography variant="h4">{serviceObj.consumerService.heading}</Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>{serviceObj.consumerService.description}</Typography>

                            {/* Button */}
                            <Button variant="contained" color="primary" sx={{ width: '15rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '3rem', fontSize: '1.2rem' }}>{serviceObj.consumerService.button}</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Outlet />
        </Container>
    );
};

export default OurService;
