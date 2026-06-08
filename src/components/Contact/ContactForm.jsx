import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FiCheckCircle } from 'react-icons/fi';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simular envío
        setShowModal(true);
        setFormData({
            nombre: '',
            email: '',
            asunto: '',
            mensaje: '',
        });
    };

    const inputStyle = {
        background: 'var(--bg-subtle)',
        border: '1px solid var(--border-light)',
        color: 'var(--text-main)',
        fontFamily: 'var(--font-sans)',
        padding: '0.85rem 1.2rem',
        borderRadius: '12px',
        width: '100%',
        outline: 'none',
        transition: 'all 0.3s ease',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
    };

    const handleFocus = (e) => {
        e.currentTarget.style.borderColor = 'var(--accent-primary)';
        e.currentTarget.style.boxShadow =
            '0 0 0 4px rgba(16, 185, 129, 0.1), inset 0 2px 4px rgba(0,0,0,0.02)';
        e.currentTarget.style.background = 'var(--bg-light)';
    };

    const handleBlur = (e) => {
        e.currentTarget.style.borderColor = 'var(--border-light)';
        e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)';
        e.currentTarget.style.background = 'var(--bg-subtle)';
    };

    return (
        <>
            <div
                className="p-4 p-md-5 rounded"
                style={{
                    background: 'var(--bg-light)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                }}
            >
                <h3
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Enviános un Mensaje
                </h3>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                        <div className="col-md-6">
                            <label
                                className="form-label text-muted fw-bold"
                                style={{ fontSize: '0.85rem' }}
                            >
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div className="col-md-6">
                            <label
                                className="form-label text-muted fw-bold"
                                style={{ fontSize: '0.85rem' }}
                            >
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label
                            className="form-label text-muted fw-bold"
                            style={{ fontSize: '0.85rem' }}
                        >
                            Asunto
                        </label>
                        <input
                            type="text"
                            name="asunto"
                            value={formData.asunto}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="¿En qué podemos ayudarte?"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="form-label text-muted fw-bold"
                            style={{ fontSize: '0.85rem' }}
                        >
                            Mensaje
                        </label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{ ...inputStyle, resize: 'vertical' }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Escribí tu mensaje acá..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-100 rounded-pill border-0 py-3 d-flex justify-content-center align-items-center gap-2"
                        style={{
                            background:
                                'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                            color: '#fff',
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                        }}
                    >
                        Enviar Mensaje <FiSend size={18} />
                    </button>
                </form>
            </div>

            {typeof document !== 'undefined' &&
                ReactDOM.createPortal(
                    <Modal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        centered
                        contentClassName="border-0 shadow-lg bg-transparent"
                        style={{ zIndex: 10000 }}
                    >
                        <div
                            style={{
                                background: 'var(--bg-light)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                                    height: '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: 'var(--bg-light)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        bottom: '-40px',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <FiCheckCircle
                                            size={32}
                                            style={{ color: 'var(--accent-primary)' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Modal.Body className="px-4 pt-5 pb-4 text-center mt-3">
                                <h4
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontWeight: 800,
                                        color: 'var(--text-main)',
                                        marginBottom: '8px',
                                    }}
                                >
                                    ¡Mensaje Enviado!
                                </h4>
                                <p
                                    style={{
                                        color: 'var(--text-muted)',
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.95rem',
                                        marginBottom: '24px',
                                    }}
                                >
                                    Gracias por comunicarte con nosotros. Recibimos tu mensaje y te
                                    responderemos a la brevedad.
                                </p>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-100 rounded-pill border-0 py-3"
                                    style={{
                                        background: 'var(--text-main)',
                                        color: 'var(--bg-light)',
                                        fontFamily: 'var(--font-tech)',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow =
                                            '0 8px 25px rgba(0,0,0,0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow =
                                            '0 4px 15px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    Cerrar
                                </button>
                            </Modal.Body>
                        </div>
                    </Modal>,
                    document.body
                )}
        </>
    );
};

export default ContactForm;
