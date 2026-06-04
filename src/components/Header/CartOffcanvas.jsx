import { Offcanvas } from 'react-bootstrap';
import { FiShoppingCart, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../CartContext/CartContext';

const CartOffcanvas = ({ show, onHide }) => {
    const { carrito, vaciarCarrito, actualizarCantidad, eliminarProducto } = useCart()

    const aumentarCantidad = (productoId) => {
        actualizarCantidad(productoId, 1)
    }

    const disminuirCantidad = (productoId) => {
        actualizarCantidad(productoId, -1)
    }

    const totalCarrito = carrito.reduce((total, producto) =>
        total + (producto.precio * producto.cantidad), 0
    )

    const cantidadProductos = carrito.reduce((cantidad, producto) =>
        cantidad + producto.cantidad, 0)

    const finalizarCompra = () => {
        alert(`Resumen: 
             
            Productos: ${cantidadProductos} 
            Total: $${totalCarrito.toFixed(2)}

            Gracias por tu compra!`)

        vaciarCarrito()
        onHide()

    }

    // Si el carrito esta vacío, "tu carrito esta vacio"
    if (carrito.length === 0) {
        return (
            <Offcanvas
                show={show}
                onHide={onHide}
                placement="end"
                style={{
                    background: 'var(--bg-light)',
                    color: 'var(--text-main)',
                    borderLeft: '1px solid var(--border-light)',
                }}
            >
                <Offcanvas.Header
                    closeButton
                    className="border-bottom"
                    style={{ borderColor: 'var(--border-light)' }}
                >
                    <Offcanvas.Title
                        style={{
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.98rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                        }}
                    >
                        Carrito de Compras
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column align-items-center justify-content-center">
                    <FiShoppingCart size={36} className="mb-3 text-muted" />
                    <p className="mb-0 text-muted small" style={{ fontFamily: 'var(--font-sans)' }}>
                        Tu carrito está vacío
                    </p>
                </Offcanvas.Body>
            </Offcanvas>
        )
    }

    // carrito con estilos
    return (
        <Offcanvas
            show={show}
            onHide={onHide}
            placement="end"
            style={{
                background: 'var(--bg-light)',
                color: 'var(--text-main)',
                borderLeft: '1px solid var(--border-light)',
                width: '400px', // Ancho fijo para mejor visualización
            }}
        >
            <Offcanvas.Header
                closeButton
                className="border-bottom"
                style={{ borderColor: 'var(--border-light)' }}
            >
                <Offcanvas.Title
                    style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                    }}
                >
                    Carrito de Compras ({carrito.length} productos)
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body style={{ padding: 0 }}>
                {/* Lista de productos */}
                <div style={{
                    maxHeight: 'calc(100vh - 180px)',
                    overflowY: 'auto',
                    padding: '1rem',
                }}>
                    {carrito.map((producto) => (
                        <div
                            key={producto.id}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                padding: '1rem 0',
                                borderBottom: '1px solid var(--border-light)',
                                alignItems: 'center',
                            }}
                        >
                            {/* Imagen del producto */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--bg-card)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }}>
                                {producto.imagen ? (
                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <FiShoppingCart size={24} style={{ color: 'var(--text-muted)' }} />
                                )}
                            </div>

                            {/* Info del producto */}
                            <div style={{ flex: 1 }}>
                                <h6 style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    margin: 0,
                                    marginBottom: '0.25rem',
                                }}>
                                    {producto.nombre}
                                </h6>
                                <p style={{
                                    fontFamily: 'var(--font-tech)',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    margin: 0,
                                    color: 'var(--primary-color)',
                                }}>
                                    ${producto.precio}
                                </p>
                            </div>

                            {/* Controles de cantidad */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                            }}>
                                <button
                                    onClick={() => disminuirCantidad(producto.id)}
                                    disabled={producto.cantidad <= 1}
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--border-light)',
                                        background: 'var(--bg-card)',
                                        color: 'var(--text-main)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: producto.cantidad <= 1 ? 'not-allowed' : 'pointer',
                                        opacity: producto.cantidad <= 1 ? 0.5 : 1,
                                    }}
                                >
                                    <FiMinus size={12} />
                                </button>

                                <span style={{
                                    minWidth: '30px',
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-tech)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                }}>
                                    {producto.cantidad}
                                </span>

                                <button
                                    onClick={() => aumentarCantidad(producto.id)}
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '4px',
                                        border: '1px solid var(--border-light)',
                                        background: 'var(--bg-card)',
                                        color: 'var(--text-main)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        cursor: producto.cantidad >= 10 ? 'not-allowed' : 'pointer',
                                    }}
                                >
                                    <FiPlus size={12} />
                                </button>
                            </div>

                            {/* Botón eliminar */}
                            <button
                                onClick={() => eliminarProducto(producto.id)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--danger-color)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                <FiTrash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer con total y checkout */}
                <div style={{
                    position: 'sticky',
                    bottom: 0,
                    background: 'var(--bg-light)',
                    borderTop: '1px solid var(--border-light)',
                    padding: '1rem',
                    marginTop: 'auto',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-tech)',
                    }}>
                        <span style={{ fontWeight: 600 }}>Total:</span>
                        <span style={{
                            fontWeight: 700,
                            color: 'var(--primary-color)',
                            fontSize: '1.2rem',
                        }}>
                            ${totalCarrito.toFixed(2)}
                        </span>
                    </div>

                    <button
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: '8px',
                            fontFamily: 'var(--font-tech)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em',
                            cursor: 'pointer',
                            transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}

                        onClick={() => {
                            finalizarCompra()
                        }}
                    >
                        FINALIZAR COMPRA
                    </button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartOffcanvas;