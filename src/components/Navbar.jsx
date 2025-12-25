import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            ...styles.nav,
            backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}>
            <div className="container" style={styles.container}>
                <div style={styles.logo}>
                    <span style={{ color: 'var(--accent-blue)' }}>&lt;</span>
                    Dev
                    <span style={{ color: 'var(--accent-blue)' }}>/&gt;</span>
                </div>
                <ul style={styles.menu}>
                    <li><a href="#hero" style={styles.link}>_hello</a></li>
                    <li><a href="#stack" style={styles.link}>_stack</a></li>
                    <li><a href="#projects" style={styles.link}>_projects</a></li>
                    <li><a href="#contact" style={styles.link}>_contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px 0',
        transition: 'all 0.3s ease',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'var(--text-primary)',
    },
    menu: {
        display: 'flex',
        gap: '30px',
    },
    link: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
    }
};

export default Navbar;
