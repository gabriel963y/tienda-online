import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Card className="h-100 shadow-sm border-0 d-flex flex-column">
            <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ height: '200px', objectFit: 'contain', width: '100%' }}
            />
            <Card.Body className="text-center d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{product.title}</Card.Title>
                <Card.Text className="text-muted">${product.price}</Card.Text>
                <div className="mt-auto">
                    <Button variant="primary" className="w-100 mb-2">Agregar al carrito</Button>
                    <Link to={`/SingleProduct/${product.id}`} className="btn btn-outline-dark w-100">
                        Ver detalle
                    </Link>

                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;