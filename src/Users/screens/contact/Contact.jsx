import React, { useEffect } from 'react'
import './Contact.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us | Indenta';
    }, []);
    return (
        <div className="ContactGet">
            <Navbar />
            <br />
            <br />
            <Footer />
        </div>
    )
}
