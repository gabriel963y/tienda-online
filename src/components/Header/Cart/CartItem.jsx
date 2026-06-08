import { FiShoppingCart, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const CartItem = ({ producto, onEliminar, onAumentar, onDisminuir }) => {
    return (
        <div
            className="mb-3 p-3 rounded"
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                background: 'var(--bg-light)',
                border: '1px solid var(--border-light)',
                transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: 'var(--bg-subtle)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                }}
            >
                {producto.imagen ? (
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                ) : (
                    <FiShoppingCart size={20} style={{ color: 'var(--text-muted)' }} />
                )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
                <h6
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        margin: 0,
                        marginBottom: '4px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {producto.nombre}
                </h6>
                <p
                    style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        margin: 0,
                        color: 'var(--accent-primary)',
                    }}
                >
                    ${producto.precio}
                </p>
            </div>

            <div className="d-flex flex-column align-items-end gap-2">
                <button
                    onClick={() => onEliminar(producto.id)}
                    className="border-0 bg-transparent p-1"
                    style={{
                        color: 'var(--text-muted)',
                        transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                    <FiTrash2 size={16} />
                </button>

                <div
                    className="d-flex align-items-center rounded-pill"
                    style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-light)',
                        padding: '2px 4px',
                    }}
                >
                    <button
                        onClick={() => onDisminuir(producto.id)}
                        disabled={producto.cantidad <= 1}
                        className="border-0 bg-transparent d-flex align-items-center justify-content-center"
                        style={{
                            width: '24px',
                            height: '24px',
                            color:
                                producto.cantidad <= 1 ? 'var(--text-muted)' : 'var(--text-main)',
                            opacity: producto.cantidad <= 1 ? 0.5 : 1,
                        }}
                    >
                        <FiMinus size={12} />
                    </button>
                    <span
                        style={{
                            minWidth: '24px',
                            textAlign: 'center',
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                        }}
                    >
                        {producto.cantidad}
                    </span>
                    <button
                        onClick={() => onAumentar(producto.id)}
                        disabled={producto.cantidad >= 10}
                        className="border-0 bg-transparent d-flex align-items-center justify-content-center"
                        style={{
                            width: '24px',
                            height: '24px',
                            color:
                                producto.cantidad >= 10 ? 'var(--text-muted)' : 'var(--text-main)',
                            opacity: producto.cantidad >= 10 ? 0.5 : 1,
                        }}
                    >
                        <FiPlus size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
