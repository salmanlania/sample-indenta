import React from 'react'
import { Container, Typography, Button } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/navbar/Navbar';

export default function Careers() {
    return (
        <div>
            <Navbar />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '40px',
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                    Careers at Indenta DSA
                </Typography>

                <Typography sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    Indenta DSA transforms individuals into skilled professionals. We hire for diverse
                    roles across our teams.
                    Embark on your journey to excellence with Indenta DSA.
                </Typography>

                <Typography sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    At Indenta, we offer prime opportunities to elevate your career, providing a
                    platform for talented professionals to evolve in their respective fields. Recognizing
                    and nurturing young talent is a cornerstone of our esteemed organization, where
                    continuous appraisal and growth are promised to those who deliver.
                </Typography>

                <Typography sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    Indenta is more than an employer; we are mentors and guides, shaping aspiring salespersons
                    into accomplished professionals. We focus on cultivating skills that enhance
                    processes, optimize time management, and foster customer retention.
                </Typography>

                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                    Advantages of Choosing Indenta DSA for Your Career
                </Typography>

                <ul>
                    <li>
                        <Typography sx={{ marginBottom: '10px' }}>
                            Health & Well-being: Indenta ensures comprehensive health coverage, prioritizing
                            your well-being.
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={{ marginBottom: '10px' }}>
                            Competitive Compensation: Indenta offers a competitive benefits package,
                            including incentives and perks.
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={{ marginBottom: '10px' }}>
                            Career Advancement & Work-life Harmony: At Indenta, excel in your role while
                            maintaining a healthy work-life balance.
                        </Typography>
                    </li>
                </ul>

                <Typography sx={{ textAlign: 'center', marginTop: '40px' }}>
                    Are you interested in becoming a part of Indenta DSA?
                </Typography>

                <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                    Join Indenta DSA
                </Button>

                <Typography sx={{ textAlign: 'center', marginTop: '40px' }}>
                    Indenta DSA embodies dynamism with a lively and passionate team. We aspire to
                    live a meaningful life and encourage our employees to do the same. Join us in this
                    dynamic journey!
                </Typography>
            </Container>
            <Footer />
        </div>
    );
}
