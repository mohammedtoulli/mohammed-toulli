import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            text: "Mohammed is a rare breed of developer who understands both clear code and beautiful design. A true asset to any team.",
            author: "Sarah Jenkins",
            role: "CTO @ TechFlow"
        },
        {
            text: "Transformative work! The platform he built for us helped scale our operations by 200% in just three months.",
            author: "David Chen",
            role: "Founder @ StartUp Inc"
        }
    ];

    return (
        <section id="testimonials" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title">Testimonials</h2>
                <div style={styles.grid}>
                    {reviews.map((review, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.quote}>"</div>
                            <p style={styles.text}>{review.text}</p>
                            <div style={styles.authorBlock}>
                                <div style={styles.avatar}>{review.author[0]}</div>
                                <div>
                                    <h4 style={styles.name}>{review.author}</h4>
                                    <span style={styles.role}>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '40px',
    },
    card: {
        background: 'rgba(255,255,255,0.02)',
        padding: '40px',
        borderRadius: '16px',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.05)',
    },
    quote: {
        position: 'absolute',
        top: '20px',
        right: '30px',
        fontSize: '4rem',
        color: 'rgba(255,255,255,0.1)',
        fontFamily: 'serif',
    },
    text: {
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
        fontStyle: 'italic',
        marginBottom: '30px',
        lineHeight: 1.6,
    },
    authorBlock: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--accent-blue)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#000',
        fontSize: '1.2rem',
    },
    name: {
        fontSize: '1rem',
        color: 'var(--text-primary)',
    },
    role: {
        fontSize: '0.8rem',
        color: 'var(--accent-green)',
        fontFamily: 'var(--font-mono)',
    }
};

export default Testimonials;
