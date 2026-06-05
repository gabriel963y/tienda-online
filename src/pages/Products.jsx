import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

import ServicesBar from '../components/ServicesBar.jsx';
import useProducts from '../hooks/useProducts.js';
import ProductCard from '../components/Productos/ProductCard.jsx';
import ProductCategoryFilter from '../components/Productos/ProductCategoryFilter.jsx';
import ProductOrder from '../components/Productos/ProductOrder.jsx';
import ProductPriceFilter from '../components/Productos/ProductPriceFilter.jsx';


const Products = () => {
    const products = useProducts() || [];

    const [SelectedCategory, setSelectedCategory] = useState(null);
    const [Limit, setLimit] = useState(6);
    const [Order, setOrder] = useState("az");
    const [priceRange, setPriceRange] = useState({ min: 0, max: 99999999 });

    const filteredProducts = products.filter(p => {
    const matchCategory = SelectedCategory ? p.category === SelectedCategory : true;
    const matchPrice = p.price >= priceRange.min && p.price <= priceRange.max;
    return matchCategory && matchPrice;
});

    const orderedProducts = [...filteredProducts].sort((a, b) => {
        if (Order === "az") return a.title.localeCompare(b.title);
        if (Order === "precio-asc") return a.price - b.price;
        if (Order === "precio-desc") return b.price - a.price;
        if (Order === "novedades") return b.isNew - a.isNew;
        if (Order === "populares") return b.isFeatured - a.isFeatured;
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
        <>
            <Container fluid className="text-center bg-success">
                <h1 className="mb-4 p-4 py-5">Catálogo de Productos</h1>
            </Container>
            <Container className="my-5">
                <Row className="mt-4 g-4">
                    <Col md={3}>
                        <h4 className="text-center mb-4">Filtros</h4>
                        <hr className="my-2 p-4" />
                        <ProductOrder onSelectOrder={changeOrder}/>
                        <ProductCategoryFilter onSelectCategory={changeCategory}/>
                        <ProductPriceFilter onPriceChange={(min, max) => setPriceRange({min, max})} />
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
        </> 
    );
};

export default Products;
