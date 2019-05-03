import React from 'react';
import {Contact} from '../components/Contact';
import Hero from '../components/Hero';
import ScrollIntoView from 'react-scroll-into-view';


export default function ContactPage() {
    return (
        <>
        <ScrollIntoView selector=".scrollTo">
            <Hero />
        </ScrollIntoView>
        <div className="scrollTo">
            <Contact />
        </div>

        </>
    )
}