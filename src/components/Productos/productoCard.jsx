import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductoCard = ({ producto }) => {
    return (
        <Card className="h-100 shadow-sm border-0">
            <Card.Img variant="top" src={producto.imagen} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="text-center">
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text className="text-muted">${producto.precio}</Card.Text>
                
                {producto.stock > 0 ? (
                    <Button variant="primary" className="w-100 mb-2">Agregar al carrito</Button>
                ) : (
                    <Button variant="secondary" className="w-100 mb-2" disabled>Sin stock</Button>
                )}
                
                <Link to={`/producto/${producto.id}`} className="btn btn-outline-dark w-100">
                    Ver detalle
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ProductoCard;