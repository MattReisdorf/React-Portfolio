import React from 'react';
import Bio from './Bio';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ContactForm from './ContactForm';

export default function Main() {
    return (
        <>
            <Bio />
            <Experience />
            <Projects />
            <ContactForm />
            <Footer />
        </>
    )
}