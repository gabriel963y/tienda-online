import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

import ServicesBar from '../components/ServicesBar.jsx';
import useProducts from '../hooks/useProducts.js';
import ProductoCard from '../components/Productos/ProductoCard';
import ProductosFilter from '../components/Productos/ProductosFilterCategoria.jsx';
import ProductosOrdenador from '../components/Productos/ProductosOrden.jsx';


const Products = () => {
    const productos = useProducts();

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("az");
    const [limite, setLimite] = useState(6);
    const [Orden, setOrden] = useState(null);

    const productosFiltrados = categoriaSeleccionada 
        ? productos.filter(p => p.category === categoriaSeleccionada)
        : productos;

    if (Orden === "precio-asc") {
        productos.sort((a, b) => a.price - b.price);
    } else if (Orden === "precio-desc") {
        productos.sort((a, b) => b.price - a.price);
    } else if (Orden === "az") {
        productos.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    const cambioOrden = (orden) => {
        setOrden(orden);
        setLimite(6);
    };

    const productosVisibles = productosFiltrados.slice(0, limite);

    const cargarMasProductos = () => {
        setLimite(prevLimite => prevLimite + 6);
    };

    const cambioCategoria = (cat) => {
        setCategoriaSeleccionada(cat);
        setLimite(6);
    };
    
    return (
        <Container className="my-5">
            <h1 className="text-center fw-bold mb-4">Catálogo de Productos</h1>
            <Row className="mt-4">
                <Col md={3}>
                    <ProductosOrdenador onSeleccionarOrden={cambioOrden}/>
                    <ProductosFilter onSeleccionarCategoria={cambioCategoria}/>
                </Col>
                <Col md={9}>
                    <Row>
                       {productosVisibles.map((item) => (
                            <Col key={item.id} md={4}><ProductoCard producto={item} /></Col>
                        ))}
                    </Row>
            {limite < productosFiltrados.length && (
                <div className="text-center mt-5">
                    <Button variant="outline-primary" onClick={cargarMasProductos}>
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
