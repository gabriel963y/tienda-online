import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';

import useProductStore from '../store/useProductStore';
import { useCart } from '../components/CartContext/CartContext';
import { useWishlist } from '../components/WishlistContext/WishlistContext';
import CartOffcanvas from '../components/Header/CartOffcanvas';

import ProductImageGallery from '../components/SingleProduct/ProductImageGallery';
import ProductInfo from '../components/SingleProduct/ProductInfo';
import ProductActions from '../components/SingleProduct/ProductActions';
import ProductReviews from '../components/SingleProduct/ProductReviews';

function SingleProduct() {
    const { id } = useParams();
    const [showCart, setShowCart] = useState(false);
    const { agregarAlCarrito } = useCart();
    const { checkIsFavorite, toggleFavorite } = useWishlist();

    const { products, loading, error, fetchProducts, hasFetched } = useProductStore();

    const product = products.find((item) => item.id === Number(id));
    const isFavorite = product ? checkIsFavorite(product.id) : false;

    useEffect(() => {
        if (!hasFetched) {
            fetchProducts();
        }
    }, [hasFetched, fetchProducts]);

    const handleAddToCart = (cantidad) => {
        agregarAlCarrito(product, cantidad);
        toast.success(
            <div className="d-flex align-items-center">
                <div className="ms-2">
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '2px' }}>
                        ¡Producto agregado!
                    </strong>
                    <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                        {product.title} x{cantidad}
                    </span>
                </div>
            </div>,
            {
                icon: <FiCheckCircle size={24} style={{ color: 'var(--accent-primary)' }} />,
                progressStyle: { background: 'var(--accent-primary)' },
                style: {
                    background: 'var(--bg-light)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-sans)',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                },
            }
        );
    };

    const handleBuyNow = (cantidad) => {
        handleAddToCart(cantidad);
        setShowCart(true); // Open the cart so they can proceed to checkout
    };

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: '60vh' }}
            >
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <Container className="my-5 text-center">
                <h3 className="text-danger">{error}</h3>
            </Container>
        );
    }

    if (!product) {
        return (
            <Container className="my-5 text-center">
                <h3>Producto no encontrado</h3>
            </Container>
        );
    }

    return (
        <div style={{ background: 'var(--bg-subtle)', minHeight: '100vh', paddingBottom: '6rem' }}>
            <div
                style={{
                    background: 'var(--bg-light)',
                    padding: '2rem 0',
                    borderBottom: '1px solid var(--border-light)',
                    marginBottom: '3rem',
                }}
            >
                <Container>
                    <Link
                        to="/productos"
                        className="d-inline-flex align-items-center gap-2 text-decoration-none"
                        style={{
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        <FiArrowLeft /> Volver a productos
                    </Link>
                </Container>
            </div>

            <Container>
                <Row className="g-5 mb-5 align-items-center">
                    <Col lg={6}>
                        <ProductImageGallery
                            image={product.image}
                            title={product.title}
                            isFavorite={isFavorite}
                            onToggleFavorite={() => toggleFavorite(product)}
                        />
                    </Col>

                    <Col lg={6}>
                        <div className="ps-lg-4">
                            <ProductInfo product={product} />
                            <ProductActions onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />
                        </div>
                    </Col>
                </Row>

                <hr
                    style={{
                        border: 'none',
                        height: '1px',
                        background: 'var(--border-light)',
                        margin: '4rem 0',
                    }}
                />

                <ProductReviews comments={product.comments} />
            </Container>

            <CartOffcanvas show={showCart} onHide={() => setShowCart(false)} />
        </div>
    );
}

export default SingleProduct;
