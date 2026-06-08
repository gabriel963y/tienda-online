import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import ContactB2B from './ContactB2B';

const ContactInfo = () => {
    const infoItems = [
        {
            icon: <FiMapPin size={24} />,
            title: 'Nuestra Ubicación',
            description: 'Av. Corrientes 1234, CABA, Argentina',
            color: 'var(--accent-secondary)',
        },
        {
            icon: <FiPhone size={24} />,
            title: 'Llamános',
            description: '+54 11 1234-5678',
            color: 'var(--accent-primary)',
        },
        {
            icon: <FiMail size={24} />,
            title: 'Email',
            description: 'soporte@nextgenstore.com',
            color: '#f59e0b',
        },
        {
            icon: <FiClock size={24} />,
            title: 'Horarios',
            description: 'Lun - Vie: 9:00 AM - 18:00 PM',
            color: '#8b5cf6',
        },
    ];

    return (
        <div className="d-flex flex-column gap-4 h-100">
            <div>
                <h3
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Información Directa
                </h3>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
                    Podés contactarnos a través de cualquiera de nuestros canales oficiales o
                    visitarnos en nuestra sucursal principal.
                </p>
            </div>

            <div className="d-flex flex-column gap-3 mt-2">
                {infoItems.map((item, index) => (
                    <div
                        key={index}
                        className="d-flex align-items-center p-3 rounded"
                        style={{
                            background: 'var(--bg-light)',
                            border: '1px solid var(--border-light)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
                            e.currentTarget.style.borderColor = `rgba(0,0,0,0.1)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                            e.currentTarget.style.borderColor = 'var(--border-light)';
                        }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center rounded-circle me-4"
                            style={{
                                width: '56px',
                                height: '56px',
                                background: 'var(--bg-subtle)',
                                color: item.color,
                                flexShrink: 0,
                                border: '1px solid var(--border-light)',
                            }}
                        >
                            {item.icon}
                        </div>
                        <div>
                            <h6
                                style={{
                                    margin: 0,
                                    fontFamily: 'var(--font-sans)',
                                    fontWeight: 700,
                                    color: 'var(--text-main)',
                                    marginBottom: '4px',
                                }}
                            >
                                {item.title}
                            </h6>
                            <p
                                style={{
                                    margin: 0,
                                    color: 'var(--text-muted)',
                                    fontFamily: 'var(--font-tech)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                }}
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <ContactB2B />
        </div>
    );
};

export default ContactInfo;
