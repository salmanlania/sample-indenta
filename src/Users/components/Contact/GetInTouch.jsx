import React, { useState, useEffect } from 'react'
import './GetInTouch.css'
// import Swal from 'sweetalert2';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import {submit} from '../../../config/Firebase'

export const GetInTouch = () => {
    const [userName, setUserName] = useState()
    const [isEmail, setIsEmail] = useState()
    const [phNumber, setPhNumber] = useState()
    const [isMessage, setIsMessage] = useState()

    const handleFocus = (e) => {
        e.target.parentNode.classList.add('focused');
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            e.target.parentNode.classList.remove('focused');
        }
    };
    

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!userName || !isEmail || !phNumber || !isMessage) {
            // Swal.fire({
            //     icon: "error",
            //     title: "Please fill out all the fields",
            // });
            alert("Eror")
        } 
        }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
        window.addEventListener('scroll', AOS.refresh);
        return () => {
            window.removeEventListener('scroll', AOS.refresh);
        }
    }, []);

    return (
        <>
            <div className="GetInTouch">
                <section className="GetInTouchPartOne">
                    <div className="GetInTouchHeading" data-aos="fade-up" data-aos-duration="500">
                        <h1 className='text-6xl	'>Get In Touch</h1>
                        <button><a href='#name'>Contact Us</a></button>
                    </div>
                </section>
                <div className="GetInTouchFieldset flex max-w-screen-xl mx-auto mt-4" style={{ alignItems: 'center', justifyContent: 'center !important', gap: '8rem', marginLeft: '4em' }}>
                    <div className="w-1/4" style={{ textAlign: 'center' }} data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
                        <p className="text-lg mb-3 text-center" style={{ width: '20rem' }}>
                            Feel free to reach out to Indenta DSA. We are always delighted to assist you with any financial services you may require.
                        </p>
                    </div>
                    <form action='mailto:muhammadsalmanlania@gmail.com' className="GetInTouchContactUsForm w-2/4 p-4 rounded shadow-md" data-aos="zoom-in-left" data-aos-duration="2000">
                        <div className="mb-4 input-container">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input
                                className="w-full px-3 py-1 border rounded focus:outline-none focus:border-blue-500"
                                type="text"
                                id="name"
                                name="name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="mb-4 input-container">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="w-full px-3 py-1 border rounded focus:outline-none focus:border-blue-500"
                                type="email"
                                id="email"
                                name="email"
                                value={isEmail}
                                onChange={(e) => setIsEmail(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="mb-4 input-container">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone:
                            </label>
                            <input
                                className="w-full px-3 py-1 border rounded focus:outline-none focus:border-blue-500"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phNumber}
                                onChange={(e) => setPhNumber(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="mb-4 input-container">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                className="w-full px-3 py-1 border rounded focus:outline-none focus:border-blue-500"
                                id="message"
                                name="message"
                                rows="3"
                                value={isMessage}
                                onChange={(e) => setIsMessage(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            ></textarea>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none">
                            <a>Submit</a>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
};