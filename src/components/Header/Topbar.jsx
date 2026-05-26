import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Topbar = () => {
    return (
        <div className="topbar-wrapper">
            <Container fluid className="d-flex align-items-center justify-content-between px-4">
                {/* Social Icons */}
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

                {/* Promo Message */}
                <div className="topbar-promo-text d-none d-md-block">
                    ⚡ Ofertas especiales: <span className="topbar-promo-accent">Envío gratis</span>{' '}
                    en pedidos superiores a $30.000
                </div>

                {/* Auth / Links */}
                <div className="d-flex gap-4">
                    <Link to="/contacto" className="topbar-link">
                        Contacto
                    </Link>
                    <Link to="/carrito" className="topbar-link">
                        Carrito
                    </Link>
                    <Link to="/login" className="topbar-link">
                        Iniciar sesión
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Topbar;
