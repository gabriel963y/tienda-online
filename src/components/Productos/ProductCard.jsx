import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

const ProductCard = ({ product }) => {
    const { agregarAlCarrito } = useCart()

    return (
        <Card className="h-100 d-flex flex-column">
            <div className="position-relative">
                <Card.Img 
                    variant="top" 
                    src={product.image} 
                    style={{ height: '200px', objectFit: 'contain', width: '100%', backgroundColor: '#e9ecef' }}
                    />
                {product.isNew && (
                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">Nuevo</span>
                )}
                {product.isFeatured && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-2">Destacado</span>
                )}
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{product.title}</Card.Title>
                <div className="my-2">
                    {product.isDiscounted ? (
                        <>
                            <div className="text-muted text-decoration-line-through" style={{ fontSize: '0.85rem' }}>
                                ${product.price}
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-1">
                                <span className="fw-bold fs-4">${(product.price * product.discount).toFixed(2)}</span>
                                <span className="badge bg-success" style={{ fontSize: '0.7rem' }}>
                                    {100 - product.discount * 100} % OFF
                                </span>
                            </div>
                        </>
                    ) : (
                            <div className="fw-bold fs-4 my-2">${product.price}</div>
                    )}
                </div>
                <div className="mt-auto">
                    <Button variant="primary" className="w-100 mb-2" onClick={ () =>
                        { agregarAlCarrito(product)}}>Agregar al carrito</Button>
                    <Link to={`/productos/${product.id}`} className="btn btn-outline-dark w-100">
                        Ver detalles
                    </Link>

                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;