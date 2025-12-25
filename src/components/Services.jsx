import React from 'react';
import ScrollReveal from './ScrollReveal';

const Services = () => {
    const services = [
        {
            title: 'Frontend Development',
            icon: '💻',
            description: 'Building responsive, pixel-perfect single page applications with React, Next.js, and modern CSS.',
            tags: ['React', 'Vue', 'Animation']
        },
        {
            title: 'Backend Systems',
            icon: '⚙️',
            description: 'Designing robust APIs, managing databases, and ensuring server performance and security.',
            tags: ['Node.js', 'Python', 'SQL/NoSQL']
        },
        {
            title: 'UI/UX Design',
            icon: '🎨',
            description: 'Translating concepts into intuitive user interfaces with a focus on usability and aesthetics.',
            tags: ['Figma', 'Prototyping', 'Design Systems']
        }
    ];

    return (
        <section id="services" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <div style={styles.grid}>
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 150} animation="fade-up">
                            <div style={styles.card} className="service-card neon-pulse">
                                <div style={styles.icon}>{service.icon}</div>
                                <h3 style={styles.title}>{service.title}</h3>
                                <p style={styles.description}>{service.description}</p>
                                <div style={styles.tags}>
                                    {service.tags.map(tag => (
                                        <span key={tag} style={styles.tag}>#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
    },
    card: {
        background: 'var(--bg-color)',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.03)',
        transition: 'all 0.3s ease',
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '20px',
        opacity: 0.9,
    },
    title: {
        fontSize: '1.5rem',
        color: 'var(--text-primary)',
        marginBottom: '10px',
    },
    description: {
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        marginBottom: '20px',
    },
    tags: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
    },
    tag: {
        fontSize: '0.8rem',
        color: 'var(--accent-blue)',
        fontFamily: 'var(--font-mono)',
    }
};

export default Services;
