import {Button} from 'react-bootstrap';
import useProducts from '../../hooks/useProducts.js';


const ProductCategoryFilter = ({onSelectCategory}) => {
    const  products  = useProducts();

    const categories = [... new Set(products.map(p=>p.category))].sort();
    
    if (!products || products.length === 0) {
        return <aside className="p-3 border rounded"><h5>Cargando...</h5></aside>;
    }
    return (
        <aside className="p-3 border rounded">
            <h5>Categorías</h5>
            <div className="d-flex flex-column gap-2 mb-4">
                <span 
                    onClick={() => onSelectCategory(null)} 
                    className="link-primary text-dark" 
                    style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                >  
                Todos los productos
                </span>
                {categories.map((cat) => (
                <span 
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
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

export default ProductCategoryFilter;