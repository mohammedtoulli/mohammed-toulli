import React from 'react';

const Experience = () => {
    const jobs = [
        {
            role: 'Senior Full Stack Developer',
            company: 'Tech Solutions Inc.',
            period: '2023 - Present',
            description: 'Leading a team of 5 developers building scalable cloud-native applications.'
        },
        {
            role: 'Frontend Developer',
            company: 'Creative Agency',
            period: '2021 - 2023',
            description: 'Developed pixel-perfect UIs and interactive animations for high-profile clients.'
        },
        {
            role: 'Freelance Developer',
            company: 'Self-Employed',
            period: '2019 - 2021',
            description: 'Delivered web solutions for small businesses using MERN stack.'
        }
    ];

    return (
        <section id="experience" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div style={styles.timeline}>
                    {jobs.map((job, index) => (
                        <div key={index} style={styles.item}>
                            <div style={styles.marker}></div>
                            <div style={styles.content}>
                                <h3 style={styles.role}>{job.role} <span style={styles.company}>@ {job.company}</span></h3>
                                <span style={styles.period}>{job.period}</span>
                                <p style={styles.description}>{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    timeline: {
        borderLeft: '2px solid rgba(255,255,255,0.1)',
        marginLeft: '10px',
        paddingLeft: '30px',
    },
    item: {
        marginBottom: '50px',
        position: 'relative',
    },
    marker: {
        position: 'absolute',
        left: '-36px',
        top: '5px',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-blue)',
        boxShadow: '0 0 10px var(--accent-blue)',
    },
    role: {
        fontSize: '1.3rem',
        color: 'var(--text-primary)',
        marginBottom: '5px',
    },
    company: {
        color: 'var(--accent-blue)',
    },
    period: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        display: 'block',
        marginBottom: '15px',
    },
    description: {
        color: 'var(--text-secondary)',
        maxWidth: '600px',
    }
};

export default Experience;
