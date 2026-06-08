import { Offcanvas } from 'react-bootstrap';
import { FiX, FiShoppingCart, FiTrash2, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useWishlist } from '../WishlistContext/WishlistContext';
import { useCart } from '../CartContext/CartContext';
import { toast } from 'react-toastify';

const WishlistOffcanvas = ({ show, onHide }) => {
    const { wishlist, toggleFavorite } = useWishlist();
    const { agregarAlCarrito } = useCart();

    const handleAddToCart = (product) => {
        agregarAlCarrito(product, 1);
        toast.success(`Agregado al carrito: ${product.title}`, {
            style: {
                background: 'var(--bg-light)',
                color: 'var(--text-main)',
                borderRadius: '12px',
                fontFamily: 'var(--font-sans)',
                border: '1px solid var(--border-light)',
            },
            progressStyle: { background: 'var(--accent-primary)' },
        });
    };

    return (
        <Offcanvas
            show={show}
            onHide={onHide}
            placement="end"
            className="border-start-0"
            style={{
                width: '100%',
                maxWidth: '420px',
                background: 'var(--bg-light)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.1)',
            }}
        >
            <Offcanvas.Header
                className="px-4 py-4"
                style={{ borderBottom: '1px solid var(--border-light)' }}
            >
                <Offcanvas.Title
                    className="d-flex align-items-center gap-3 w-100 m-0"
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                    }}
                >
                    <span
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(244,63,94,0.1)',
                            color: '#f43f5e',
                        }}
                    >
                        <FiHeart size={20} style={{ fill: '#f43f5e' }} />
                    </span>
                    Tus Favoritos
                    <span
                        className="ms-auto rounded-pill px-2 py-1 text-center"
                        style={{
                            background: 'var(--bg-subtle)',
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.75rem',
                            minWidth: '32px',
                        }}
                    >
                        {wishlist.length}
                    </span>
                </Offcanvas.Title>
                <button
                    onClick={onHide}
                    className="border-0 bg-transparent ms-2 p-2 d-flex align-items-center justify-content-center rounded-circle"
                    style={{ color: 'var(--text-muted)', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(244,63,94,0.1)';
                        e.currentTarget.style.color = '#f43f5e';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--text-muted)';
                    }}
                >
                    <FiX size={20} />
                </button>
            </Offcanvas.Header>

            <Offcanvas.Body className="p-0 d-flex flex-column" style={{ overflowX: 'hidden' }}>
                {wishlist.length === 0 ? (
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-5">
                        <div
                            className="mb-4 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--bg-subtle)',
                                border: '1px dashed var(--border-light)',
                            }}
                        >
                            <FiHeart
                                size={32}
                                style={{ color: 'var(--text-muted)', opacity: 0.5 }}
                            />
                        </div>
                        <h5
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 700,
                                color: 'var(--text-main)',
                                marginBottom: '12px',
                            }}
                        >
                            Tu lista está vacía
                        </h5>
                        <p
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                marginBottom: '24px',
                            }}
                        >
                            Aún no has guardado ningún producto. Explora nuestro catálogo y guarda
                            tus favoritos.
                        </p>
                        <Link
                            to="/productos"
                            onClick={onHide}
                            className="text-decoration-none rounded-pill py-2 px-4"
                            style={{
                                background: 'var(--bg-subtle)',
                                color: 'var(--text-main)',
                                fontFamily: 'var(--font-tech)',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                border: '1px solid var(--border-light)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f43f5e';
                                e.currentTarget.style.borderColor = '#f43f5e';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--bg-subtle)';
                                e.currentTarget.style.borderColor = 'var(--border-light)';
                                e.currentTarget.style.color = 'var(--text-main)';
                            }}
                        >
                            Ver productos
                        </Link>
                    </div>
                ) : (
                    <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
                        {wishlist.map((product) => (
                            <div
                                key={product.id}
                                className="d-flex align-items-center p-4"
                                style={{
                                    borderBottom: '1px solid var(--border-light)',
                                    transition: 'background 0.2s ease',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background = 'var(--bg-subtle)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = 'transparent')
                                }
                            >
                                <div
                                    className="rounded-3 flex-shrink-0"
                                    style={{
                                        width: '75px',
                                        height: '75px',
                                        background: 'var(--bg-subtle)',
                                        border: '1px solid var(--border-light)',
                                        padding: '8px',
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>
                                <div className="ms-3 flex-grow-1 min-w-0" style={{ minWidth: 0 }}>
                                    <h6
                                        className="text-truncate mb-1"
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontWeight: 700,
                                            color: 'var(--text-main)',
                                        }}
                                        title={product.title}
                                    >
                                        {product.title}
                                    </h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <span
                                            style={{
                                                fontFamily: 'var(--font-tech)',
                                                fontWeight: 700,
                                                color: 'var(--accent-primary)',
                                                fontSize: '0.95rem',
                                            }}
                                        >
                                            ${product.price}
                                        </span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="d-flex align-items-center justify-content-center gap-2 border-0 rounded-pill px-3 py-1"
                                            style={{
                                                background: 'var(--bg-subtle)',
                                                color: 'var(--text-main)',
                                                fontFamily: 'var(--font-tech)',
                                                fontSize: '0.65rem',
                                                fontWeight: 700,
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                transition: 'all 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background =
                                                    'var(--accent-primary)';
                                                e.currentTarget.style.color = '#fff';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background =
                                                    'var(--bg-subtle)';
                                                e.currentTarget.style.color = 'var(--text-main)';
                                            }}
                                        >
                                            <FiShoppingCart size={12} /> Agregar
                                        </button>
                                        <button
                                            onClick={() => toggleFavorite(product)}
                                            className="border-0 bg-transparent text-muted px-2 d-flex align-items-center"
                                            style={{ transition: 'color 0.2s ease' }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = '#f43f5e')
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = 'var(--text-muted)')
                                            }
                                            title="Eliminar de favoritos"
                                        >
                                            <FiTrash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default WishlistOffcanvas;
