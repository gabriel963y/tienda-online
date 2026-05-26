import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

const FAQ_ITEMS = [
    {
        q: '¿Cuáles son los métodos de pago disponibles?',
        a: 'Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias y Mercado Pago. Además, contamos con opciones de financiación de hasta 12 cuotas sin interés en categorías seleccionadas.',
    },
    {
        q: '¿Cómo funciona el envío gratis a partir de $30.000?',
        a: 'Si tu compra supera los $30.000, el envío es 100% gratuito a cualquier punto del país. Al ingresar tu código postal en el checkout, el sistema aplicará la bonificación automáticamente. Los despachos se realizan en menos de 24 horas hábiles.',
    },
    {
        q: '¿Puedo realizar un cambio o devolución de mi compra?',
        a: 'Sí, por supuesto. Tenés hasta 30 días de corrido desde que recibís tu pedido para solicitar un cambio o devolución sin cargo adicional. El producto debe estar sin uso, en su empaque original y con todas sus etiquetas.',
    },
    {
        q: '¿Es seguro ingresar mis datos de pago en la tienda?',
        a: 'Totalmente seguro. Contamos con encriptación SSL de 256 bits (el estándar de seguridad bancaria) para proteger todos tus datos personales y bancarios. Además, los pagos se procesan a través de pasarelas autorizadas y seguras.',
    },
    {
        q: '¿Cómo hago el seguimiento de mi pedido?',
        a: 'Una vez que tu paquete sea despachado, te enviaremos un correo electrónico automático con el número de guía y el enlace de seguimiento de la empresa logística para que puedas consultar el estado de tu entrega en tiempo real.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            style={{
                background: 'var(--bg-subtle)',
                borderTop: '1px solid var(--border-light)',
                borderBottom: '1px solid var(--border-light)',
                padding: '80px 0 100px',
                transition: 'background 0.4s ease, border-color 0.4s ease',
            }}
        >
            <Container style={{ maxWidth: '800px' }}>
                {/* ── Encabezado ── */}
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
                        Soporte
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
                        Preguntas{' '}
                        <span
                            style={{
                                background:
                                    'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Frecuentes
                        </span>
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {FAQ_ITEMS.map((item, idx) => {
                        const isOpen = activeIndex === idx;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    border: isOpen
                                        ? '1px solid rgba(16, 185, 129, 0.3)'
                                        : isHovered
                                          ? '1px solid rgba(16, 185, 129, 0.2)'
                                          : '1px solid var(--border-light)',
                                    borderRadius: 18,
                                    background: isOpen
                                        ? 'rgba(16, 185, 129, 0.05)'
                                        : 'var(--bg-light)',
                                    boxShadow: isOpen
                                        ? '0 12px 30px rgba(16, 185, 129, 0.04)'
                                        : isHovered
                                          ? '0 8px 24px rgba(0, 0, 0, 0.02)'
                                          : 'none',
                                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    onClick={() => toggleAccordion(idx)}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '20px 24px',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <span
                                            style={{
                                                fontFamily: 'var(--font-tech)',
                                                color:
                                                    isOpen || isHovered
                                                        ? 'var(--accent-primary)'
                                                        : 'var(--text-muted)',
                                                fontSize: '0.92rem',
                                                fontWeight: 700,
                                                transition: 'color 0.25s ease',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {String(idx + 1).padStart(2, '0')}.
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: 'var(--font-sans)',
                                                fontWeight: 700,
                                                fontSize: '0.98rem',
                                                color:
                                                    isOpen || isHovered
                                                        ? 'var(--accent-primary)'
                                                        : 'var(--text-main)',
                                                transition: 'color 0.25s ease',
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {item.q}
                                        </span>
                                    </div>
                                    <FaChevronDown
                                        style={{
                                            color: isOpen
                                                ? 'var(--accent-primary)'
                                                : 'var(--text-muted)',
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition:
                                                'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease',
                                            fontSize: '0.85rem',
                                            flexShrink: 0,
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        maxHeight: isOpen ? '200px' : '0px',
                                        opacity: isOpen ? 1 : 0,
                                        overflow: 'hidden',
                                        transition:
                                            'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: '0 24px 20px 24px',
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '0.88rem',
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default FAQ;
