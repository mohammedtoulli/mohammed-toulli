import React from 'react';
import ScrollReveal from './ScrollReveal';

const TechStack = () => {
    const skills = [
        { name: 'React', category: 'Frontend' },
        { name: 'JavaScript', category: 'Language' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Tailwind', category: 'CSS' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Git', category: 'Tool' },
        { name: 'Next.js', category: 'Framework' },
    ];

    return (
        <section id="stack" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>
                <div style={styles.grid}>
                    {skills.map((skill, index) => (
                        <ScrollReveal key={index} delay={index * 100} animation="fade-up">
                            <div style={styles.card} className="neon-pulse">
                                <span style={styles.category}>{skill.category}</span>
                                <h3 style={styles.skillName}>{skill.name}</h3>
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    card: {
        background: 'var(--bg-secondary)',
        padding: '25px',
        borderRadius: '4px',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.3s ease',
        cursor: 'default',
    },
    category: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--accent-blue)',
        display: 'block',
        marginBottom: '10px',
    },
    skillName: {
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
    }
};

export default TechStack;
