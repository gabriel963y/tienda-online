import {Form, Button} from 'react-bootstrap';


const ProductosFilter = () => {
    const categorias = ["Ropa para hombre", "Ropa para Mujer", "Ropa deportiva", "Computación", "Celulares", "Belleza y cosmética", "Muebles y decoración"];
    return (
        
           <aside className="p-3 border rounded">
                <h5>Categorías</h5>
                <div className="d-flex flex-column gap-2 mb-4">
                    {categorias.map((cat, index) => (
                            <a href="#" 
                                key={cat}
                                className="text-dark text-decoration-none" 
                                style={{ cursor: 'pointer', fontSize: '0.9rem' }}>{cat}</a>)
                        )
                    }
            </div>
            <h5>Precio</h5>
            <div className="d-flex flex-column gap-2">
                <a href="#" className="text-dark text-decoration-none" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>Hasta $ 50.000</a>
                <a href="#" className="text-dark text-decoration-none" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>$ 50.000 a $ 100.000</a>
                <a href="#" className="text-dark text-decoration-none" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>Más de $ 100.000</a>
                <Form className="d-flex align-items-center gap-2">
                <Form.Control 
                    type="number" 
                    placeholder="Mínimo" 
                    className="form-control-sm"
                />
                <span>—</span>
                <Form.Control 
                    type="number" 
                    placeholder="Máximo" 
                    className="form-control-sm"
                />
                <Button variant="outline-primary" size="sm">:3</Button>
            </Form>
            
            </div>
            
            <div>
                <Form>
                    <Form.Check
                        type="switch"
                        label="Llega mañana"
                    />
                </Form>
            </div>
            </aside>
        
                
    )
}

export default ProductosFilter