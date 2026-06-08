import { FiMail, FiZap } from 'react-icons/fi';

function BlogSideBarCTA() {
    return (
        <div
            className="mb-5 p-4 rounded position-relative overflow-hidden"
            style={{
                background:
                    'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                color: '#fff',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    opacity: 0.1,
                    transform: 'rotate(15deg)',
                }}
            >
                <FiZap size={120} />
            </div>

            <div className="position-relative z-1">
                <h5
                    className="fw-bold mb-3"
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.2rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.3,
                    }}
                >
                    Colaborá con nuestro Blog
                </h5>

                <p
                    className="mb-4"
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: 1.6,
                    }}
                >
                    ¿Sos experto en tecnología? ¿Te apasiona el desarrollo? Escribinos y compartí tu
                    conocimiento con la comunidad.
                </p>

                <a
                    href="mailto:contacto@NextGen.com"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none rounded-pill"
                    style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        color: '#fff',
                        padding: '8px 16px',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.color = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.color = '#fff';
                    }}
                >
                    <FiMail /> contacto@NextGen.com
                </a>
            </div>
        </div>
    );
}

export default BlogSideBarCTA;
