import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const SingleProduct = () => {
    const { id } = useParams();

    return (
        <Container className="my-5 py-5 text-center">
            <h1 className="fw-bold mb-3">Detalle del Producto</h1>
            <p className="text-muted">
                Estás viendo los detalles del producto con ID: <strong>{id}</strong>
            </p>
        </Container>
    );
};

export default SingleProduct;
