import { FiShoppingCart } from 'react-icons/fi';

const CartEmptyState = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center">
            <div
                className="mb-4 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(16, 185, 129, 0.08)',
                }}
            >
                <FiShoppingCart size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <h5
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                }}
            >
                Tu carrito está vacío
            </h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                ¡Explora nuestro catálogo y descubre productos increíbles!
            </p>
        </div>
    );
};

export default CartEmptyState;
