import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

import ServicesBar from '../components/ServicesBar.jsx';
import useProducts from '../hooks/useProducts.js';
import ProductCard from '../components/Productos/ProductCard.jsx';
import ProductCategoryFilter from '../components/Productos/ProductCategoryFilter.jsx';
import ProductOrder from '../components/Productos/ProductOrder.jsx';


const Products = () => {
    const products = useProducts() || [];

    const [SelectedCategory, setSelectedCategory] = useState(null);
    const [Limit, setLimit] = useState(6);
    const [Order, setOrder] = useState("az");

    const filteredProducts = SelectedCategory 
        ? products.filter(p => p.category === SelectedCategory)
        : [...products];

    const orderedProducts = [...filteredProducts].sort((a, b) => {
        if (Order === "az") return a.title.localeCompare(b.title);
        if (Order === "precio-asc") return a.price - b.price;
        if (Order === "precio-desc") return b.price - a.price;
        return 0;
    });
    
    const changeOrder = (newOrder) => {
        setOrder(newOrder);
        setLimit(6);
    };

    const visibleProducts = orderedProducts.slice(0, Limit);

    const getMoreProducts = () => {
        setLimit(prevLimit => prevLimit + 6);
    };

    const changeCategory = (cat) => {
        setSelectedCategory(cat);
        setLimit(6);
    };
    
    return (
        <Container className="my-5">
            <h1 className="text-center fw-bold mb-4">Catálogo de Productos</h1>
            <Row className="mt-4 g-4">
                <Col md={3}>
                    <ProductOrder onSelectOrder={changeOrder}/>
                    <ProductCategoryFilter onSelectCategory={changeCategory}/>
                </Col>
                <Col md={9}>
                    <Row className="g-4">
                       {visibleProducts.map((item) => (
                            <Col key={item.id} md={4} className="d-flex align-items-stretch"><ProductCard product={item} /></Col>
                        ))}
                    </Row>
            {Limit < orderedProducts.length && (
                <div className="text-center mt-5">
                    <Button variant="outline-primary" onClick={getMoreProducts}>
                        Ver más
                    </Button>
                </div>
            )}
                </Col>
            </Row>
        </Container> 
    );
};

export default Products;
