import { Container, Row, Col } from 'react-bootstrap';
import './PromoBanner.css'; // Importamos el CSS actualizado

const PromoBanner = () => {
    return (
        <Container className="my-5">
            <div className="promo-banner-card position-relative overflow-hidden py-5 px-4 px-md-5">
                {/* AURAS FLOTANTES DE COLOR */}
                <div className="promo-glow promo-glow-primary" />
                <div className="promo-glow promo-glow-secondary" />

                {/* MARCA DE AGUA EDITORIAL */}
                <div className="watermark-text d-none d-md-block">10% OFF</div>

                <Row
                    className="align-items-center justify-content-between position-relative"
                    style={{ zIndex: 2 }}
                >
                    {/* TEXTOS INFORMATIVOS */}
                    <Col md={7} lg={6}>
                        <span className="promo-tag">OFERTA ESPECIAL</span>
                        <h2 className="promo-title mt-3">Cupones de Descuento del 10%</h2>
                        <p className="promo-desc">
                            Suscríbete a nuestro boletín y recibe un cupón especial del 10% para tu
                            próxima compra en toda la tienda.
                        </p>
                    </Col>

                    {/* FORMULARIO DE EMAIL INTERACTIVO */}
                    <Col md={5} lg={5} className="d-flex justify-content-md-end mt-4 mt-md-0">
                        <form className="promo-input-group" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                className="promo-input"
                                placeholder="Ingresa tu correo"
                                required
                            />
                            <button type="submit" className="promo-submit-btn">
                                Suscribirse
                            </button>
                        </form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default PromoBanner;
