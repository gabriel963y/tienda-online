import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts.js';

import TabSwitcher from './TabSwitcher';
import ProductListItem from './ProductListItem';
import ProductSideCard from './ProductSideCard';

const PopularProducts = () => {
    const products = useProducts();
    const [activeTab, setActiveTab] = useState('beauty');
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setHoveredIndex(0);
    }, [activeTab]);

    const isDesktop = windowWidth >= 992;
    const isMobile = windowWidth < 576;

    const filtered = products.filter((item) => item.category === activeTab).slice(0, 6);

    const featuredProduct = filtered[hoveredIndex] || filtered[0];

    return (
        <section
            className="py-5"
            style={{
                background: 'var(--bg-subtle)',
                borderTop: '1px solid var(--border-light)',
                borderBottom: '1px solid var(--border-light)',
            }}
        >
            <Container className="py-3">
                <div className="mb-5">
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
                        Nuestro Catálogo
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
                        Artículos Más{' '}
                        <span
                            style={{
                                background:
                                    'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Populares
                        </span>
                    </h2>
                </div>

                <TabSwitcher activeTab={activeTab} onChange={setActiveTab} />

                {products.length === 0 ? (
                    <div className="d-flex flex-column align-items-center justify-content-center py-5 gap-3">
                        <div className="spinner-border text-success" role="status" />
                        <span className="text-muted font-monospace" style={{ fontSize: '0.8rem' }}>
                            Cargando productos...
                        </span>
                    </div>
                ) : (
                    <Row className="g-4 align-items-stretch">
                        <Col xs={12} lg={8}>
                            <div
                                className="list-group list-group-flush rounded-4 overflow-hidden shadow-sm"
                                style={{
                                    background: 'var(--bg-light)',
                                    border: '1px solid var(--border-light)',
                                }}
                            >
                                {filtered.map((item, idx) => (
                                    <ProductListItem
                                        key={item.id}
                                        item={item}
                                        index={idx}
                                        isActive={hoveredIndex === idx}
                                        onHover={setHoveredIndex}
                                        isMobile={isMobile}
                                        isDesktop={isDesktop}
                                    />
                                ))}
                            </div>
                        </Col>

                        <Col lg={4} className="d-none d-lg-flex">
                            {featuredProduct && (
                                <ProductSideCard product={featuredProduct} index={hoveredIndex} />
                            )}
                        </Col>
                    </Row>
                )}
            </Container>
        </section>
    );
};

export default PopularProducts;
