import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductoCard = ({ producto }) => {
    return (
        <Card className="h-100 shadow-sm border-0">
            
            <Card.Img 
                variant="top" 
                src={producto.image} 
                style={{ height: '200px', objectFit: 'contain' }} 
            />
            <Card.Body className="text-center">
                
                <Card.Title style={{ fontSize: '1rem' }}>{producto.title}</Card.Title>
                
                
                <Card.Text className="text-muted">${producto.price}</Card.Text>
                
                <Button variant="primary" className="w-100 mb-2">Agregar al carrito</Button>
                
                <Link to={`/SingleProduct/${producto.id}`} className="btn btn-outline-dark w-100">
                    Ver detalle
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ProductoCard;