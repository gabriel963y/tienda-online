import { FiBriefcase, FiArrowRight } from 'react-icons/fi';

const ContactB2B = () => {
    return (
        <div
            className="mt-4 p-4 rounded text-center position-relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-subtle) 100%)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.querySelector('.b2b-arrow').style.transform = 'translateX(4px)';
                e.currentTarget.querySelector('.b2b-icon-container').style.transform = 'scale(1.1)';
                e.currentTarget.querySelector('.b2b-icon-container').style.background =
                    'rgba(14, 165, 233, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.b2b-arrow').style.transform = 'translateX(0)';
                e.currentTarget.querySelector('.b2b-icon-container').style.transform = 'scale(1)';
                e.currentTarget.querySelector('.b2b-icon-container').style.background =
                    'rgba(14, 165, 233, 0.1)';
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '-30px',
                    width: '120px',
                    height: '120px',
                    background: 'rgba(14, 165, 233, 0.12)', // Accent secondary glow
                    filter: 'blur(35px)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-30px',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(16, 185, 129, 0.08)', // Accent primary glow
                    filter: 'blur(30px)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            ></div>

            <div className="position-relative" style={{ zIndex: 1 }}>
                <div
                    className="b2b-icon-container mx-auto d-flex align-items-center justify-content-center mb-3"
                    style={{
                        width: '52px',
                        height: '52px',
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: 'var(--accent-secondary)',
                        borderRadius: '14px',
                        border: '1px solid rgba(14, 165, 233, 0.2)',
                        transition: 'all 0.3s ease',
                    }}
                >
                    <FiBriefcase size={24} />
                </div>

                <h5
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginBottom: '8px',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Atención a Empresas (B2B)
                </h5>

                <p
                    style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-muted)',
                        marginBottom: '20px',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-sans)',
                    }}
                >
                    Para compras mayoristas, equipamiento corporativo o alianzas estratégicas,
                    contacta a nuestro equipo especializado.
                </p>

                <button
                    className="rounded-pill border-0 px-4 py-2 d-inline-flex align-items-center gap-2"
                    style={{
                        background: 'var(--text-main)',
                        color: 'var(--bg-light)',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-secondary)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--text-main)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    }}
                >
                    Contactar{' '}
                    <FiArrowRight
                        className="b2b-arrow"
                        style={{ transition: 'transform 0.3s ease' }}
                    />
                </button>
            </div>
        </div>
    );
};

export default ContactB2B;
