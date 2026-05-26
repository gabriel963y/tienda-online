import { Container, Row, Col } from 'react-bootstrap';
import {
    FaCreditCard,
    FaTruck,
    FaShieldAlt,
    FaRedoAlt,
    FaHeadset,
    FaMoneyBillWave,
} from 'react-icons/fa';

const SERVICES = [
    {
        icon: <FaCreditCard size={22} />,
        color: '#10b981',
        title: 'Elegí cómo pagar',
        desc: 'Tarjeta, débito o 12 cuotas sin interés.',
    },
    {
        icon: <FaTruck size={22} />,
        color: '#0ea5e9',
        title: 'Envío gratis',
        desc: 'A partir de $30.000 a todo el país.',
    },
    {
        icon: <FaShieldAlt size={22} />,
        color: '#8b5cf6',
        title: 'Compra segura',
        desc: 'Encriptación SSL de 256 bits.',
    },
    {
        icon: <FaRedoAlt size={22} />,
        color: '#f59e0b',
        title: 'Devoluciones',
        desc: '30 días de garantía sin preguntas.',
    },
    {
        icon: <FaMoneyBillWave size={22} />,
        color: '#ef4444',
        title: 'Precio igualado',
        desc: 'Si lo encontrás más barato, lo igualamos.',
    },
    {
        icon: <FaHeadset size={22} />,
        color: '#06b6d4',
        title: 'Soporte 24/7',
        desc: 'Atención todos los días del año.',
    },
];

const ServicesBar = () => (
    <div
        style={{
            borderTop: '1px solid var(--border-light)',
            borderBottom: '1px solid var(--border-light)',
            background: 'var(--bg-light)',
        }}
    >
        <Container className="py-5">
            {/* Encabezado */}
            <div className="text-center mb-5">
                <span
                    className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill fw-bold text-uppercase mb-3"
                    style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.22em',
                        color: 'var(--accent-primary)',
                        background: 'rgba(16,185,129,0.08)',
                        border: '1px solid rgba(16,185,129,0.2)',
                    }}
                >
                    <span
                        className="pulse-dot-anim"
                        style={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: 'var(--accent-primary)',
                            display: 'inline-block',
                            boxShadow: '0 0 6px var(--accent-primary)',
                        }}
                    />
                    Beneficios Exclusivos
                </span>
                <h2
                    className="fw-bold mb-0 text-uppercase"
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 900,
                        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                        letterSpacing: '-0.035em',
                        lineHeight: 1.15,
                        color: 'var(--text-main)',
                    }}
                >
                    ¿Por qué{' '}
                    <span
                        style={{
                            background:
                                'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        elegirnos?
                    </span>
                </h2>
            </div>

            <Row className="g-0">
                {SERVICES.map((s, i) => (
                    <Col key={i} xs={6} md={4} lg={2}>
                        <div
                            className="d-flex flex-column align-items-center text-center px-3 py-4"
                            style={{
                                borderLeft: i > 0 ? '1px solid var(--border-light)' : 'none',
                                borderRight: 'none',
                                transition: 'background 0.2s ease',
                                cursor: 'default',
                                height: '100%',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = `${s.color}08`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: '50%',
                                    background: `${s.color}10`,
                                    color: s.color,
                                    position: 'relative',
                                }}
                            >
                                {s.icon}
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: 4,
                                        right: 4,
                                        width: 7,
                                        height: 7,
                                        borderRadius: '50%',
                                        background: s.color,
                                        opacity: 0.85,
                                    }}
                                />
                            </div>

                            <p
                                className="mb-1 fw-bold"
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.85rem',
                                    letterSpacing: '-0.01em',
                                    color: 'var(--text-main)',
                                    lineHeight: 1.2,
                                }}
                            >
                                {s.title}
                            </p>

                            <p
                                className="mb-0"
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.45,
                                }}
                            >
                                {s.desc}
                            </p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default ServicesBar;
