import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactHero = () => {
    return (
        <div
            className="position-relative overflow-hidden mb-5"
            style={{
                padding: '4rem 0 4rem',
                background: 'var(--bg-light)',
                borderBottom: '1px solid var(--border-light)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    width: '50vw',
                    height: '50vw',
                    maxWidth: '600px',
                    maxHeight: '600px',
                    background:
                        'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    top: '-20%',
                    right: '-10%',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            ></div>

            <Container className="position-relative z-3 mb-4">
                <Breadcrumb
                    listProps={{ className: 'm-0 p-0 align-items-center' }}
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}
                >
                    <Breadcrumb.Item
                        linkAs={Link}
                        linkProps={{ to: '/' }}
                        className="text-decoration-none"
                    >
                        <span style={{ color: 'var(--text-muted)' }}>Inicio</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>
                            Contacto
                        </span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className="position-relative z-3 text-center">
                <h1
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 800,
                        fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                        color: 'var(--text-main)',
                        letterSpacing: '-0.04em',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                    }}
                >
                    Ponete en{' '}
                    <span
                        style={{
                            background:
                                'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Contacto
                    </span>
                </h1>

                <h4
                    className="fw-bold mb-3"
                    style={{
                        fontFamily: 'var(--font-tech)',
                        color: 'var(--text-main)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                    }}
                >
                    Estamos acá para ayudarte
                </h4>

                <p
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.1rem',
                        color: 'var(--text-muted)',
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                    }}
                >
                    ¿Tenés alguna duda sobre nuestros productos, envíos o un pedido en curso?
                    Dejános un mensaje y nuestro equipo de soporte te responderá lo antes posible.
                </p>
            </Container>
        </div>
    );
};

export default ContactHero;
