import React from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import background3 from '../images/IMG_2.jpg';

export default function AboutMePage() {
    return (
        <>
        <Hero img={background3} />
        <AboutMe />
        </>
    )
}