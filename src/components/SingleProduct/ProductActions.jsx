import { useState } from 'react';
import { FiMinus, FiPlus, FiShoppingCart, FiCreditCard } from 'react-icons/fi';

const ProductActions = ({ onAddToCart, onBuyNow }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleMinus = () => setCantidad((c) => Math.max(1, c - 1));
    const handlePlus = () => setCantidad((c) => c + 1);

    return (
        <div
            className="p-4 rounded-4"
            style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
            }}
        >
            <div className="d-flex align-items-center mb-4">
                <span
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginRight: 'auto',
                    }}
                >
                    Cantidad
                </span>

                <div
                    className="d-flex align-items-center rounded-pill px-2 py-1"
                    style={{
                        background: 'var(--bg-light)',
                        border: '1px solid var(--border-light)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
                    }}
                >
                    <button
                        onClick={handleMinus}
                        className="border-0 bg-transparent d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                            width: '32px',
                            height: '32px',
                            color: 'var(--text-main)',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = 'var(--bg-subtle)')
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                        <FiMinus />
                    </button>
                    <span
                        className="text-center"
                        style={{
                            width: '40px',
                            fontFamily: 'var(--font-tech)',
                            fontWeight: 700,
                            color: 'var(--text-main)',
                        }}
                    >
                        {cantidad}
                    </span>
                    <button
                        onClick={handlePlus}
                        className="border-0 bg-transparent d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                            width: '32px',
                            height: '32px',
                            color: 'var(--text-main)',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = 'var(--bg-subtle)')
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                        <FiPlus />
                    </button>
                </div>
            </div>

            <div className="d-flex flex-column gap-3">
                <button
                    onClick={() => onAddToCart(cantidad)}
                    className="w-100 rounded-pill border-0 py-3 d-flex justify-content-center align-items-center gap-2"
                    style={{
                        background: 'var(--text-main)',
                        color: 'var(--bg-light)',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    }}
                >
                    <FiShoppingCart size={18} /> Agregar al carrito
                </button>

                <button
                    onClick={() => onBuyNow(cantidad)}
                    className="w-100 rounded-pill py-3 d-flex justify-content-center align-items-center gap-2"
                    style={{
                        background:
                            'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                        color: '#fff',
                        border: 'none',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                    }}
                >
                    <FiCreditCard size={18} /> Comprar ahora
                </button>
            </div>
        </div>
    );
};

export default ProductActions;
