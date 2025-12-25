import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollReveal from './components/ScrollReveal';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
    return (
        <div>
            <CustomCursor />
            <Navbar />

            <Hero />

            <ScrollReveal>
                <TechStack />
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <Services />
            </ScrollReveal>

            <ScrollReveal delay={200}>
                <Experience />
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <Projects />
            </ScrollReveal>

            <ScrollReveal>
                <Testimonials />
            </ScrollReveal>

            <ScrollReveal animation="fade-in">
                <Contact />
            </ScrollReveal>
        </div>
    );
}

export default App;
