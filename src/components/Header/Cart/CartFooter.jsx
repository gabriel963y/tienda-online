import { FiCheckCircle } from 'react-icons/fi';

const CartFooter = ({ total, onCheckout }) => {
    return (
        <div
            style={{
                background: 'var(--bg-light)',
                borderTop: '1px solid var(--border-light)',
                padding: '1.5rem',
                boxShadow: '0 -10px 20px rgba(0,0,0,0.02)',
            }}
        >
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span
                    style={{
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                    }}
                >
                    Total a pagar
                </span>
                <span
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 800,
                        fontSize: '1.4rem',
                        color: 'var(--text-main)',
                    }}
                >
                    ${total.toFixed(2)}
                </span>
            </div>

            <button
                onClick={onCheckout}
                className="w-100 rounded-pill border-0 d-flex justify-content-center align-items-center gap-2"
                style={{
                    background:
                        'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                    color: '#fff',
                    padding: '1rem',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
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
            >
                Realizar Compra <FiCheckCircle size={18} />
            </button>
        </div>
    );
};

export default CartFooter;
