import {Button} from 'react-bootstrap';
import useProducts from '../../hooks/useProducts.js';
import { LiaAccusoft } from 'react-icons/lia';


const ProductCategoryFilter = ({onSelectCategory}) => {
    const  products  = useProducts();

    const categories = [... new Set(products.map(p=>p.category))].sort();
    
    return (
        <aside className="mb-4">
            <h5 className="mb-4">Categorías</h5>
            <ul className="d-flex flex-column gap-2 mb-4 list-unstyled">
                <li 
                    onClick={() => onSelectCategory(null)} 
                    className="link-primary text-dark" 
                    style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                >
                Todos los productos
                </li>
                {categories.map((cat) => (
                <li 
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className="link-primary text-dark" 
                    style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                >
                {cat} 
                </li>
            ))}
        </ul>
        </aside>     
    );
};

export default ProductCategoryFilter;