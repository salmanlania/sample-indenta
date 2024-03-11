import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Image from './images/ceo.jpg';
import ImageTwo from './images/2.jpg';
import ImageThree from './images/core.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const ourDescriptionOne = "Indenta DSA stands as a dynamic force in the UAE’s direct sales landscape, experiencing rapid growth under the strategic vision of Kamil Hafeez. Founded on the principles of customer satisfaction, teamwork, and exemplary service, Indenta DSA has emerged as a prominent player, offering an extensive array of services to banks and financial institutions in the UAE. Specializing in personal loans, financing, and credit card sales, Indenta DSA is dedicated to facilitating the financial aspirations of individuals and businesses alike."

const ourDescriptionTwo =
    "Indenta DSA stands out as one of the fastest-growing direct sales agencies in the UAE. Rooted in the principles of customer satisfaction, teamwork, and superior service, Indenta DSA offers an extensive suite of services to banks and financial institutions across the UAE. Specializing in personal loans, financing, and credit card sales, we take pride in being your all-encompassing financial solution. Acting as a strong bridge between banks and customers, our mission is to secure the best finance options for you. If you’re in search of a personal loan, rest assured that Indenta DSA can facilitate loans through leading banks with nominal interest rates, eliminating the need for you to leave your comfort zone. Our dedicated team ensures a hassle-free application process, with the convenience of visits to your location for streamlined processing. Our expertise spans from direct sales to marketing, reflecting our deep industry knowledge and commitment to providing exceptional value. Indenta DSA comprises a team of professional bankers committed to legitimacy and accountability in every endeavor";

const ourDescriptionThree = "We have a set of diverse knowledge and technical capacities that empower businesses to adeptly navigate the intricate needs of our clients. Through these competencies, we not only establish a lasting footprint but also cultivate a robust reputation and brand image, solidifying our position in the market."


const OurStory = () => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

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

    const handleReadMore = () => {
        setShowFullDescription(true);
    };
    const handleToggleDescription = () => {
        setShowFullDescription((prev) => !prev);
    };


    return (
        <div style={{ background: 'white' }} component="div" maxWidth={false} disableGutters>
            <Container maxWidth="xl" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h2" style={{ marginBottom: '1rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                    Our Story
                </Typography>
            </Container>
            <Paper>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'stretch',
                        textAlign: 'left',
                        height: '100%',
                    }}
                >
                    <img
                        src={Image}
                        alt="Your Image"
                        style={{ maxWidth: '120%', height: '120%', objectFit: 'cover', marginRight: { xs: 0, sm: 2 } }}
                    />
                    <div style={{ color: 'black', height: 'auto', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                        <Typography variant="h4" gutterBottom sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', textAlign: 'center' }}>
                            Welcome To Indenta DSA
                        </Typography>
                        <Typography sx={{ height: '10rem', maxWidth: '35rem', display: 'flex', justifyContent: 'center', margin: 'auto', textAlign: 'center', marginBottom: '8rem', fontSize: '1.2rem' }}>
                            {ourDescriptionOne}
                        </Typography>
                    </div>
                </Paper>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'stretch',
                        textAlign: 'left',
                        height: '100%',
                    }}
                >
                    <div style={{ color: 'black', height: 'auto', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                        <Typography variant="h4" gutterBottom sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', textAlign: 'center' }}>
                            Our Mission and Specialization
                        </Typography>
                        <Typography sx={{ height: '10rem', maxWidth: '35rem', display: 'flex', justifyContent: 'center', margin: 'auto', textAlign: 'center', marginBottom: '20rem', fontSize: '1.2rem' }}>
                            {ourDescriptionTwo}
                        </Typography>
                    </div>
                    <img
                        src={ImageTwo}
                        alt="Your Image"
                        style={{ maxWidth: '120%', height: '120%', objectFit: 'cover', marginRight: { xs: 0, sm: 2 } }}
                    />
                </Paper>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'stretch',
                        textAlign: 'left',
                        height: '100%',
                    }}
                >
                    <img
                        src={ImageThree}
                        alt="Your Image"
                        style={{ maxWidth: '120%', height: '120%', objectFit: 'cover', marginRight: { xs: 0, sm: 2 } }}
                    />
                    <div style={{ color: 'black', height: 'auto', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                        <Typography variant="h4" gutterBottom sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', textAlign: 'center' }}>
                            Core Competencies
                        </Typography>
                        <Typography sx={{ height: '10rem', maxWidth: '35rem', display: 'flex', justifyContent: 'center', margin: 'auto', textAlign: 'center', marginBottom: '8rem', fontSize: '1.2rem' }}>
                            {ourDescriptionThree}
                        </Typography>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
};

export default OurStory;
