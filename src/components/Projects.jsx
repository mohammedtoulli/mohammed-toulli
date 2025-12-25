import React from 'react';
import ScrollReveal from './ScrollReveal';

const ProjectCard = ({ project }) => {
    const [rotation, setRotation] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            style={{
                ...styles.card,
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
            }}
            className="project-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div style={styles.header}>
                <div style={styles.folderIcon}>📁</div>
                <div style={styles.links}>
                    <a href={project.link} style={styles.iconLink}>↗</a>
                </div>
            </div>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <ul style={styles.techList}>
                {project.tech.map((t, i) => (
                    <li key={i} style={styles.tech}>{t}</li>
                ))}
            </ul>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Dashboard',
            description: 'A robust dashboard for managing products, orders, and analytics with real-time updates.',
            tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
            link: '#'
        },
        {
            title: 'Social Media App',
            description: 'Full-stack social platform with authentication, posts, comments, and real-time chat.',
            tech: ['Next.js', 'Firebase', 'Tailwind', 'Socket.io'],
            link: '#'
        },
        {
            title: 'AI Image Generator',
            description: 'SaaS application that uses AI to generate images from text prompts.',
            tech: ['OpenAI API', 'React', 'Stripe', 'Express'],
            link: '#'
        }
    ];

    return (
        <section id="projects" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title">Featured Work</h2>
                <div style={styles.grid}>
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 200} animation="fade-up">
                            <ProjectCard project={project} />
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
        background: '#111',
        padding: '30px',
        borderRadius: '8px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid rgba(255,255,255,0.05)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    folderIcon: {
        fontSize: '2rem',
        color: 'var(--accent-blue)',
    },
    iconLink: {
        color: 'var(--text-secondary)',
        fontSize: '1.5rem',
    },
    title: {
        fontSize: '1.5rem',
        color: 'var(--text-primary)',
        marginBottom: '10px',
    },
    description: {
        color: 'var(--text-secondary)',
        fontSize: '1rem',
        marginBottom: '20px',
        flexGrow: 1,
    },
    techList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        marginTop: 'auto',
    },
    tech: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
    }
};

export default Projects;
