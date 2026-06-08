import { Link } from 'react-router-dom';

const ProductActions = ({ handleAddToCart, id }) => {
    return (
        <div className="d-flex flex-column gap-2 mt-auto w-100">
            <button
                className="w-100 border-0 rounded"
                style={{
                    background: 'var(--accent-primary)',
                    color: '#fff',
                    padding: '12px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                }}
                onClick={handleAddToCart}
            >
                Agregar al carrito
            </button>
            <Link
                to={`/productos/${id}`}
                className="w-100 text-center rounded text-decoration-none"
                style={{
                    background: 'transparent',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-light)',
                    padding: '12px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--border-light)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                }}
            >
                Ver detalles
            </Link>
        </div>
    );
};

export default ProductActions;
