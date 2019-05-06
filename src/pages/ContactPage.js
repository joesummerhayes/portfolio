import React from 'react';
import {Contact} from '../components/Contact';
import Hero from '../components/Hero';
import ScrollIntoView from 'react-scroll-into-view';
import background2 from '../images/IMG_1.jpg';


export default function ContactPage() {
    return (
        <>
        <ScrollIntoView selector=".scrollTo">
            <Hero img={background2} />
        </ScrollIntoView>
        <div className="scrollTo">
            <Contact />
        </div>

        </>
    )
}