import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const printCard = [
    {
        Cardtitle: 'Empower Your Financial Journey Today. Secure the Ideal Credit Card Now!',
        cardText: 'Indenta DSA stands as your reliable partner in navigating the world of credit cards in the UAE. Follow these steps to secure the perfect credit card tailored to your needs.',
    },
    {
        Cardtitle: 'Explore Our Array of Credit Card Options:',
        cardText: 'Make an informed decision by comparing the options available. Indenta DSA empowers you to choose the credit card that aligns seamlessly with your lifestyle, offering a transparent view of the terms, benefits, and exclusive features associated with each option.',
    },
    {
        Cardtitle: 'Compare and Select Your Ideal Credit Card:',
        cardText: 'Make an informed decision by comparing the options available. Indenta DSA empowers you to choose the credit card that aligns seamlessly with your lifestyle, offering a transparent view of the terms, benefits, and exclusive features associated with each option.',
    },
    {
        Cardtitle: 'Swiftly Apply and Acquire Your Chosen Card:',
        cardText: 'Seize control of your financial destiny by applying for your selected credit card. Indenta DSA streamlines the application process, providing you with a hassle-free',
    },
];

const listItemMap = [
    'Cutting-Edge Data Analytics',
    'AI-Powered Customer Insights',
    'Dynamic Credit Scoring Models',
    'Personalized Offer Recommendations',
    'Efficient Lead Generation',
    'Real-time Market Insights',
];

export default function ServiceCards() {
    return (
        <section style={{  display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop : '2rem' , marginBottom : '1rem' , flexWrap: 'wrap' }}>
            <Grid container spacing={3}>
                {printCard.map((card) => (
                    <Grid key={card.Cardtitle} item xs={12} sm={6} md={3}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <Card style={{ width: '100%', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '8px' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom style={{ fontSize: '1.25rem' }}>
                                        {card.Cardtitle}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                                        {card.cardText}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </section>
    )


}

