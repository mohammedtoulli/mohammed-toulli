import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" style={styles.hero}>
            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    <p style={styles.greeting}>Hi, I am</p>
                    <h1 style={styles.name} className="glitch-effect">Mohammed Toulli</h1>
                    <h2 style={styles.role}>
                        {text}<span style={styles.cursor}>|</span>
                    </h2>
                    <p style={styles.bio}>
                        I build accessible, pixel-perfect, and performant web experiences.
                    </p>
                    <div style={styles.buttons}>
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>Contact Me</a>
                        <a href="/resume.pdf" target="_blank" className="btn" style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>Download CV</a>
                    </div>
                </div>

                <div style={styles.codeBlock}>
                    <div style={styles.codeHeader}>
                        <div style={{ ...styles.dot, background: '#ff5f56' }}></div>
                        <div style={{ ...styles.dot, background: '#ffbd2e' }}></div>
                        <div style={{ ...styles.dot, background: '#27c93f' }}></div>
                    </div>
                    <pre style={styles.code}>
                        <code>
                            <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e06c75' }}>developer</span> <span style={{ color: '#56b6c2' }}>=</span> {'{'}
                            <br />  name: <span style={{ color: '#98c379' }}>"Mohammed"</span>,
                            <br />  skills: [<span style={{ color: '#98c379' }}>"React"</span>, <span style={{ color: '#98c379' }}>"Node"</span>, <span style={{ color: '#98c379' }}>"Next.js"</span>],
                            <br />  hardWorker: <span style={{ color: '#d19a66' }}>true</span>,
                            <br />  coffeeLevel: <span style={{ color: '#d19a66' }}>Infinity</span>
                            <br />{'}'};
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '60px',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '50px',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    greeting: {
        color: 'var(--accent-blue)',
        fontFamily: 'var(--font-mono)',
        fontSize: '1.1rem',
    },
    name: {
        fontSize: '4rem',
        lineHeight: 1.1,
        color: 'var(--text-primary)',
    },
    role: {
        fontSize: '2rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        height: '40px',
    },
    cursor: {
        animation: 'blink 1s step-end infinite',
    },
    bio: {
        maxWidth: '500px',
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
    },
    buttons: {
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
    },
    codeBlock: {
        background: '#1e1e1e',
        borderRadius: '8px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        border: '1px solid #333',
        overflow: 'hidden',
    },
    codeHeader: {
        background: '#252526',
        padding: '10px 15px',
        display: 'flex',
        gap: '8px',
    },
    dot: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
    },
    code: {
        padding: '20px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        color: '#abb2bf',
    }
};

export default Hero;
