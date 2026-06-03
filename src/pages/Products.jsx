import { Container, Row, Col, Form } from 'react-bootstrap';
import ServicesBar from '../components/ServicesBar.jsx';
import { productos } from '../components/Productos/productosPrueba';
import ProductoCard from '../components/Productos/ProductoCard';
import ProductosFilter from '../components/Productos/ProductosFilter.jsx';
import ProductosNavBar from '../components/Productos/ProductosNavBar.jsx';

const Products = () => {
    
    return (
        <Container className="my-5">
            <h1 className="text-center fw-bold mb-4">Catálogo de Productos</h1>
            <Row className="mt-4">
                <Col md={3}>
                    <ProductosFilter />
                </Col>
                <Col md={9}>
                    <Row>
                    {productos.map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
                            <ProductoCard producto={item} />
                        </Col>
                    ))}
                    </Row>
                    <div className='d-flex justify-content-center mt-4'>
                        <ProductosNavBar />
                    </div>
                </Col>
            </Row>
        </Container> 
    );
};

export default Products;
