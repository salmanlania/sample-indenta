import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

import exclusive from './images/banking.png';
import effortless from './images/effortless.png';
import customer from './images/customer.png';
import trust from './images/Trust.png';

const carouselData = [
    {
        title: 'Exclusive Banking Partnerships',
        description:
            'As a leading Channel Partner, we collaborate with multiple banks, providing a spectrum of financial options best suited to your financial requirements.',
        image: exclusive,
    },
    {
        title: 'Effortless Application Process',
        description:
            'We specialize in simplifying complicated financial processes. We act as a channel, facilitating a seamless and hassle-free application process, saving your time and effort.',
        image: effortless,
    },
    {
        title: 'Customer-Centric Approach',
        description:
            'Your financial well-being is our priority. Our dedicated team is committed to understanding your needs and delivering personalized solutions that align with your goals.',
        image: customer,
    },
    {
        title: 'The Trust and Reliability',
        description:
            'Backed by a network of reputable banking institutions, we stand on the highest standards of trust and reliability in every financial transaction.',
        image: trust,
    },
];

const cardsPerPage = 4; 
export default function WhyChooseUs() {
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        const autoChange = setInterval(() => {
            handleNext();
        }, 5000);

        return () => {
            clearInterval(autoChange);
        };
    }, [pageIndex]);

    const handleNext = () => {
        setPageIndex((prevIndex) => (prevIndex + 1) % Math.ceil(carouselData.length / cardsPerPage));
    };

    const startIndex = pageIndex * cardsPerPage;
    const endIndex = (pageIndex + 1) * cardsPerPage;

    return (
        <Container sx={{ height: '100%', textAlign: 'center', paddingTop: 4 }}>
            <Typography variant='h4' sx={{ marginBottom: 4, fontWeight: 'bold' }}>Why Choose Us?</Typography>
            <Grid container spacing={0} justifyContent="center">
                {carouselData.slice(startIndex, endIndex).map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3} sx={{ height: '100%' }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <img src={item.image} alt={item.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <Typography variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
