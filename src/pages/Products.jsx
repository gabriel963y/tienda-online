import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiCheckCircle } from 'react-icons/fi';

import useProducts from '../hooks/useProducts.js';
import ProductCard from '../components/Productos/ProductCard.jsx';
import ProductCategoryFilter from '../components/Productos/ProductCategoryFilter.jsx';
import ProductOrder from '../components/Productos/ProductOrder.jsx';
import ProductPriceFilter from '../components/Productos/ProductPriceFilter.jsx';
import { filterProducts, sortProducts } from '../services/productServices.js';
import { useCart } from '../components/CartContext/CartContext.jsx';

const Products = () => {
    const products = useProducts() || [];
    const { agregarAlCarrito } = useCart();

    const [SelectedCategory, setSelectedCategory] = useState(null);
    const [Limit, setLimit] = useState(6);
    const [Order, setOrder] = useState('az');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 99999999 });

    const filteredProducts = filterProducts(products, SelectedCategory, priceRange);
    const orderedProducts = sortProducts(filteredProducts, Order);

    const changeOrder = (newOrder) => {
        setOrder(newOrder);
        setLimit(6);
    };

    const visibleProducts = orderedProducts.slice(0, Limit);

    const getMoreProducts = () => {
        setLimit((prevLimit) => prevLimit + 6);
    };

    const changeCategory = (cat) => {
        setSelectedCategory(cat);
        setLimit(6);
    };

    const handleAddToCart = (product) => {
        agregarAlCarrito(product);
        toast.success(
            <div className="d-flex align-items-center">
                <div className="ms-2">
                    <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '2px' }}>
                        ¡Producto agregado!
                    </strong>
                    <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>{product.title}</span>
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

    return (
        <>
            <div
                className="mb-5 position-relative overflow-hidden"
                style={{
                    padding: '5rem 0',
                    background: 'var(--bg-light)',
                    borderBottom: '1px solid var(--border-light)',
                    transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        width: '60vw',
                        height: '60vw',
                        maxWidth: '800px',
                        maxHeight: '800px',
                        background:
                            'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 65%)',
                        borderRadius: '50%',
                        top: '-20%',
                        right: '-10%',
                        pointerEvents: 'none',
                        zIndex: 1,
                    }}
                ></div>

                <Container className="position-relative z-3 mb-4">
                    <Breadcrumb
                        listProps={{ className: 'm-0 p-0 align-items-center' }}
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}
                    >
                        <Breadcrumb.Item
                            linkAs={Link}
                            linkProps={{ to: '/' }}
                            className="text-decoration-none"
                        >
                            <span style={{ color: 'var(--text-muted)' }}>Inicio</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
                                Productos
                            </span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Container>

                <Container className="position-relative z-2 text-center">
                    <h1
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 800,
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: 'var(--text-main)',
                            letterSpacing: '-0.04em',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            transition: 'color 0.15s ease',
                        }}
                    >
                        Catálogo de{' '}
                        <span
                            style={{
                                background:
                                    'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Productos
                        </span>
                    </h1>
                    <p
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1.1rem',
                            color: 'var(--text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                            transition: 'color 0.15s ease',
                        }}
                    >
                        Descubrí nuestra colección de artículos, diseñados para ofrecerte la mejor
                        experiencia y calidad excepcional.
                    </p>
                </Container>
            </div>

            <Container className="mb-5 pb-5">
                <Row className="g-5">
                    <Col lg={3} md={4}>
                        <div
                            className="sticky-top"
                            style={{
                                background: 'var(--bg-light)',
                                border: '1px solid var(--border-light)',
                                borderRadius: '20px',
                                padding: '24px',
                                boxShadow: 'var(--card-shadow)',
                                transition: 'all 0.15s ease',
                                top: '100px',
                            }}
                        >
                            <h4
                                className="d-flex align-items-center gap-2 mb-4"
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontWeight: 700,
                                    fontSize: '1.2rem',
                                    color: 'var(--text-main)',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'block',
                                        width: '4px',
                                        height: '18px',
                                        background: 'var(--accent-primary)',
                                        borderRadius: '4px',
                                        boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
                                    }}
                                ></span>
                                Filtros
                            </h4>

                            <ProductOrder onSelectOrder={changeOrder} />
                            <hr
                                style={{
                                    border: 0,
                                    height: '1px',
                                    background: 'var(--border-light)',
                                    margin: '20px 0',
                                    opacity: 1,
                                }}
                            />

                            <ProductCategoryFilter onSelectCategory={changeCategory} />
                            <hr
                                style={{
                                    border: 0,
                                    height: '1px',
                                    background: 'var(--border-light)',
                                    margin: '20px 0',
                                    opacity: 1,
                                }}
                            />

                            <ProductPriceFilter
                                onPriceChange={(min, max) => setPriceRange({ min, max })}
                            />
                        </div>
                    </Col>

                    <Col lg={9} md={8}>
                        <Row className="g-4 align-items-stretch">
                            {visibleProducts.map((item) => (
                                <Col key={item.id} lg={4} md={6}>
                                    <ProductCard
                                        product={item}
                                        onAddToCart={() => handleAddToCart(item)}
                                    />
                                </Col>
                            ))}
                        </Row>

                        {Limit < orderedProducts.length && (
                            <div className="text-center mt-5 pt-3">
                                <button
                                    className="px-5 py-3 rounded-pill"
                                    style={{
                                        background: 'transparent',
                                        color: 'var(--text-main)',
                                        fontFamily: 'var(--font-tech)',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        border: '1px solid var(--border-light)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--accent-primary)';
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.boxShadow =
                                            '0 10px 25px rgba(16, 185, 129, 0.3)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'var(--text-main)';
                                        e.currentTarget.style.borderColor = 'var(--border-light)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    onClick={getMoreProducts}
                                >
                                    Ver más productos
                                </button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Products;
