import React from 'react'
import { Container, Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import creditCard from './images/credit-Card.png'
import bankingFacilitation from './images/banking-facilitation.png'
import autoLoan from './images/auto-loan.png'
import mortgageLoan from './images/mortgage-loan.png'
import personalLoan from './images/personal-loan.png'
import smeLoan from './images/sme-loan.png'


const servicesData = [
    {
        title: 'Credit Card',
        // image: 'https://via.placeholder.com/150',
        image: `${creditCard}`
    },
    {
        title: 'Banking Facilitation',
        // image: 'https://via.placeholder.com/150',
        image: `${bankingFacilitation}`
    },
    {
        title: 'Personal Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${personalLoan}`
    },
    {
        title: 'Auto Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${autoLoan}`
    },
    {
        title: 'Mortgage Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${mortgageLoan}`
    },
    {
        title: 'SME Loan',
        // image: 'https://via.placeholder.com/150',
        image: `${smeLoan}`
    },
];

export default function Popular() {
    return (
        <div style={{background: '#23568B',}}>
            <Container style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', padding: '3em',  width: '100%' }}>
                <Typography variant="h5" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
                    Popular Services
                </Typography>
                <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'row ', alignItems: 'center', }}>
                    {servicesData.map((service, index) => (
                        <Grid item key={index}>
                            <Card style={{ transition: 'transform 0.3s ease-in-out', padding: '1rem', borderRadius: '3rem' }}>
                                <CardMedia
                                    component="img"
                                    style={{ height: 80, objectFit: 'cover', borderRadius: '3rem' }}
                                    image={service.image}
                                    alt={service.title}
                                />
                                <CardContent>
                                    <Typography variant="subtitle1" style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '0.75rem', width: '4rem' }}>
                                        {service.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
