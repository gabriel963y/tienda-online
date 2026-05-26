import React from 'react';
import { Container } from 'react-bootstrap';

const Products = () => {
    return (
        <Container className="my-5 py-5 text-center">
            <h1 className="fw-bold mb-3">Sección de Productos</h1>
            <p className="text-muted">
                Esta es la página principal de nuestro catálogo general. Aquí podrás ver todas las
                categorías de productos disponibles.
            </p>
        </Container>
    );
};

export default Products;
