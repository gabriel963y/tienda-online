import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Topbar = () => {
    return (
        <div className="topbar-wrapper">
            <Container fluid className="px-2 px-sm-4">
                <Row className="align-items-center w-100 mx-auto">
                    {/* Iconos sociales */}
                    <Col className="col-sm-3 col-md-3 d-none d-sm-flex justify-content-start p-0">
                        <div className="d-flex gap-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="topbar-social-link"
                            >
                                <FaFacebookF size={12} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="topbar-social-link"
                            >
                                <FaInstagram size={12} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="topbar-social-link"
                            >
                                <FaYoutube size={12} />
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noreferrer"
                                className="topbar-social-link"
                            >
                                <FaPinterest size={12} />
                            </a>
                        </div>
                    </Col>

                    {/* Mensaje promocional */}
                    <Col className="col-md-6 d-none d-md-block text-center p-0">
                        <div className="topbar-promo-text">
                            ⚡ Ofertas especiales:{' '}
                            <span className="topbar-promo-accent">Envío gratis</span> en pedidos
                            superiores a $30.000
                        </div>
                    </Col>

                    {/* Autenticación / Enlaces */}
                    <Col className="col-12 col-sm-9 col-md-3 d-flex justify-content-center justify-content-sm-end p-0">
                        <div className="d-flex gap-3 gap-sm-4">
                            <Link to="/contacto" className="topbar-link">
                                Contacto
                            </Link>
                            <Link to="/login" className="topbar-link">
                                Iniciar sesión
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topbar;
