import React from 'react';
import Bio from './Bio';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import ContactForm from './ContactForm';

export default function Main() {
    return (
        <>
            <Bio />
            <Skills />
            <Projects />
            <ContactForm />
            <Footer />
        </>
    )
}