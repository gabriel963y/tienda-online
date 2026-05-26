import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('¡Te suscribiste con éxito a nuestra newsletter de ofertas!');
        e.target.reset();
    };

    return (
        <footer className="bg-white border-top border-light py-5 mt-5">
            <Container>
                <Row className="gy-4 text-center text-md-start">
                    <Col
                        xs={12}
                        md={6}
                        lg={4}
                        className="d-flex flex-column align-items-center align-items-md-start gap-3"
                    >
                        <Link to="/" className="text-decoration-none lh-1">
                            <span
                                className="fs-4 fw-bold"
                                style={{
                                    fontFamily: 'Orbitron, sans-serif',
                                    background: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                NextGen Store
                            </span>
                            <span
                                className="d-block text-muted fw-semibold mt-1"
                                style={{ fontSize: '0.65rem', letterSpacing: '2px' }}
                            >
                                ECOMMERCE
                            </span>
                        </Link>

                        <p
                            className="text-muted mb-3"
                            style={{ fontSize: '0.88rem', lineHeight: '1.6', maxWidth: '320px' }}
                        >
                            Tu tienda online favorita. Ofrecemos la mejor selección de tecnología,
                            moda y artículos para el hogar con envíos rápidos a todo el país.
                        </p>

                        <div className="d-flex gap-2">
                            {[
                                { icon: <FaFacebookF size={13} />, url: 'https://facebook.com' },
                                { icon: <FaInstagram size={13} />, url: 'https://instagram.com' },
                                { icon: <FaYoutube size={13} />, url: 'https://youtube.com' },
                                { icon: <FaPinterestP size={13} />, url: 'https://pinterest.com' },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-circle d-flex align-items-center justify-content-center border"
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        backgroundColor: '#f8fafc',
                                        borderColor: 'rgba(0,0,0,0.06)',
                                        color: '#64748b',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            'rgba(16, 185, 129, 0.08)';
                                        e.currentTarget.style.color = '#10b981';
                                        e.currentTarget.style.borderColor =
                                            'rgba(16, 185, 129, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f8fafc';
                                        e.currentTarget.style.color = '#64748b';
                                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                                    }}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </Col>

                    <Col xs={12} md={3} lg={2}>
                        <h6
                            className="fw-bold text-uppercase mb-3 text-dark"
                            style={{ fontSize: '0.8rem', letterSpacing: '1px' }}
                        >
                            Navegación
                        </h6>
                        <ul
                            className="list-unstyled d-flex flex-column gap-2"
                            style={{ fontSize: '0.88rem' }}
                        >
                            <li>
                                <Link
                                    to="/"
                                    className="text-muted text-decoration-none link-success"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tecnologia"
                                    className="text-muted text-decoration-none link-success"
                                >
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/hogar"
                                    className="text-muted text-decoration-none link-success"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col xs={12} md={3} lg={2}>
                        <h6
                            className="fw-bold text-uppercase mb-3 text-dark"
                            style={{ fontSize: '0.8rem', letterSpacing: '1px' }}
                        >
                            Soporte
                        </h6>
                        <ul
                            className="list-unstyled d-flex flex-column gap-2"
                            style={{ fontSize: '0.88rem' }}
                        >
                            <li>
                                <a
                                    href="#"
                                    className="text-muted text-decoration-none link-success"
                                >
                                    Preguntas Frecuentes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted text-decoration-none link-success"
                                >
                                    Envíos y Entregas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted text-decoration-none link-success"
                                >
                                    Políticas de Garantía
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-muted text-decoration-none link-success"
                                >
                                    Contacto Directo
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <h6
                            className="fw-bold text-uppercase mb-3 text-dark"
                            style={{ fontSize: '0.8rem', letterSpacing: '1px' }}
                        >
                            Suscribíte a nuestra Newsletter
                        </h6>
                        <p
                            className="text-muted mb-3"
                            style={{ fontSize: '0.88rem', lineHeight: '1.6' }}
                        >
                            Recibí las últimas novedades sobre ofertas exclusivas en tecnología,
                            moda y accesorios para el hogar directamente en tu correo.
                        </p>
                        <Form
                            onSubmit={handleNewsletterSubmit}
                            className="d-flex flex-column flex-sm-row gap-2"
                        >
                            <Form.Control
                                type="email"
                                placeholder="Tu correo electrónico"
                                required
                                className="bg-light border-0 px-3 py-2"
                                style={{ fontSize: '0.9rem', borderRadius: '8px' }}
                            />
                            <Button
                                type="submit"
                                variant="success"
                                className="fw-bold px-3 py-2"
                                style={{
                                    borderRadius: '8px',
                                    fontFamily: 'Orbitron, sans-serif',
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.5px',
                                }}
                            >
                                UNIRSE
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <hr className="my-4" style={{ borderColor: 'rgba(0,0,0,0.06)' }} />

                <Row className="gy-2 text-center text-md-start align-items-center">
                    <Col xs={12} md={6}>
                        <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>
                            &copy; {new Date().getFullYear()} NextGen. Todos los derechos
                            reservados.
                        </p>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex justify-content-center justify-content-md-end gap-3"
                        style={{ fontSize: '0.8rem' }}
                    >
                        <a href="#" className="text-muted text-decoration-none link-success">
                            Políticas de Privacidad
                        </a>
                        <a href="#" className="text-muted text-decoration-none link-success">
                            Términos de Servicio
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
