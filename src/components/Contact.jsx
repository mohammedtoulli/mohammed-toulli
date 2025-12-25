import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '100px 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 className="section-title">Get In Touch</h2>
                <p style={styles.text}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>

                <a href="mailto:mohammedtoulli@gmail.com" className="btn" style={styles.mainBtn}>
                    Say Hello
                </a>

                <div style={styles.footer}>
                    <p style={styles.copyright}>Designed & Built by Mohammed Toulli</p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    text: {
        color: 'var(--text-secondary)',
        fontSize: '1.2rem',
        marginBottom: '50px',
        lineHeight: 1.8,
    },
    mainBtn: {
        padding: '20px 50px',
        fontSize: '1.2rem',
    },
    footer: {
        marginTop: '100px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '30px',
    },
    copyright: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: '#555',
    }
};

export default Contact;
