import React from 'react';
import { Container, Toolbar, Typography } from '@mui/material';

export default function IndentaInfo() {
    return (
        <div style={{ color: 'black' }}>
            <Container position="static" sx={{ background: 'white', color: 'black', boxShadow: 'none' }}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', gap: '2rem', marginBottom: '1rem' }}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            textAlign: 'center',
                            fontSize: '2.4rem',
                            marginBottom: '1rem',
                            fontWeight: 'bold'
                        }}
                    >
                        Careers at Indenta DSA
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            textAlign: 'center',
                            fontSize: '1.2rem',
                            maxWidth: '90%',
                            margin: '0 auto', // Center the text
                        }}
                    >
                        Indenta DSA transforms individuals into skilled professionals. Renowned for our
                        training excellence, we aspire to be a continuously award-winning direct sales
                        agency in the UAE. We hire individuals for diverse roles across our teams. If you
                        are seeking a career in marketing, sales, or banking sectors, we invite you to
                        explore the opportunities available at Indenta DSA.
                    </Typography>
                </Toolbar>
            </Container>
        </div>
    );
}
