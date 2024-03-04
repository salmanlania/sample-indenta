import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const printCard = [
  {
    Cardtitle: 'Cutting-Edge Data Analytics',
    cardText: 'Indenta DSA leverages cutting-edge data analytics to understand market trends, customer behavior, and credit card preferences.Our data- driven approach ensures that the credit card solutions we recommend are aligned with the ever - evolving needs of consumers.',
  },
  {
    Cardtitle: 'AI-Powered Customer Insights',
    cardText: 'Indenta DSA leverages cutting-edge data analytics to understand market trends, customer behavior, and credit card preferences. Our data-driven approach ensures that the credit card solutions we recommend are aligned with the ever-evolving needs of consumers.',
  },
  {
    Cardtitle: 'Dynamic Credit Scoring Models',
    cardText: 'Indenta DSA leverages cutting-edge data analytics to understand market trends, customer behavior, and credit card preferences. Our data-driven approach ensures that the credit card solutions we recommend are aligned with the ever-evolving needs of consumers.',
  },
  {
    Cardtitle: 'Personalized Offer Recommendations',
    cardText: 'Indenta DSA leverages cutting-edge data analytics to understand market trends, customer behavior, and credit card preferences. Our data-driven approach ensures that the credit card solutions we recommend are aligned with the ever-evolving needs of consumers.',
  },
  {
    Cardtitle: 'Efficient Lead Generation',
    cardText: 'Indenta DSA leverages cutting-edge data analytics to understand market trends, customer behavior, and credit card preferences. Our data-driven approach ensures that the credit card solutions we recommend are aligned with the ever-evolving needs of consumers.',
  },
  {
    Cardtitle: 'Real-time Market Insights',
    cardText: 'Indenta DSA leverages cutting-edge data analytics to understand market trends, customer behavior, and credit card preferences. Our data-driven approach ensures that the credit card solutions we recommend are aligned with the ever-evolving needs of consumers.',
  },
  {
    Cardtitle: 'Fraud Detection and Prevention',
    cardText: 'Indenta DSA leverages cutting-edge data analytics to understand market trends, customer behavior, and credit card preferences. Our data-driven approach ensures that the credit card solutions we recommend are aligned with the ever-evolving needs of consumers.',
  },
  {
    Cardtitle: 'Predictive Customer Behavior Analysis',
    cardText: 'Anticipate customer behavior with precision through our predictive analysis. Indenta DSA&#39;s AI models forecast trends and behaviors, allowing banks to proactively design credit card features and benefits that align with the future expectations of their customer base.',
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

export default function WhyIndentaDSA() {
  const getCardBackgroundColor = (index) => {
    const colors = ["#2B4742", "#958359", "#E7AC73", "#FBC7A8",  "#958359", "#2B4742", "#FBC7A8" , "#E7AC73"];
    return colors[index];
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', padding: '1rem', flexWrap: 'wrap' }}>
      <Grid container spacing={0}>
        {printCard.map((card, index) => (
          <Grid key={card.Cardtitle} item xs={12} sm={6} md={3}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Card style={{ width: '103%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '4px 0', backgroundColor: getCardBackgroundColor(index) }}>
                <CardContent sx={{display : 'flex' , flexDirection : 'column' , gap : '1rem' , cursor : 'pointer' ,':hover': {transition : '2s' , transform : 'scale(1.1)'} }}>
                  <Typography variant="h6" gutterBottom style={{ fontSize: '1.5rem' , textAlign: 'center' , color : '#fff' }}>
                    {card.Cardtitle}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" style={{ textAlign: 'center' , color : '#fff' }}>
                    {card.cardText}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
