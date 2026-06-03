import {Button} from 'react-bootstrap';
import useProducts from '../../hooks/useProducts.js';


const ProductosFilter = ({onSeleccionarCategoria}) => {
    const  productos  = useProducts();

    const categorias = [... new Set(productos.map(p=>p.category))].sort();
    
    if (!productos || productos.length === 0) {
        return <aside className="p-3 border rounded"><h5>Cargando...</h5></aside>;
    }
    return (
        <aside className="p-3 border rounded">
            <h5>Categorías</h5>
            <div className="d-flex flex-column gap-2 mb-4">
                <span 
                    onClick={() => onSeleccionarCategoria(null)} 
                    className="link-primary text-dark" 
                    style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                >  
                Todos los productos
                </span>
                {categorias.map((cat) => (
                <span 
                    key={cat}
                    onClick={() => onSeleccionarCategoria(cat)}
                    className="link-primary text-dark" 
                    style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                >
                {cat} 
                </span>
            ))}
        </div>
        </aside>     
    );
};

export default ProductosFilter;