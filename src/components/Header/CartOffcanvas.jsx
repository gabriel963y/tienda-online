import { Offcanvas } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../CartContext/CartContext';
import { useState } from 'react';
import {
    calculateCartTotal,
    calculateCartCount,
    generateOrderReceipt,
} from '../../services/cartServices';

import CartEmptyState from './Cart/CartEmptyState';
import CartItem from './Cart/CartItem';
import CartFooter from './Cart/CartFooter';
import CheckoutSuccessModal from './Cart/CheckoutSuccessModal';

const CartOffcanvas = ({ show, onHide }) => {
    const { carrito, vaciarCarrito, actualizarCantidad, eliminarProducto } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [lastOrder, setLastOrder] = useState({ total: 0, count: 0, id: '' });

    const totalCarrito = calculateCartTotal(carrito);
    const cantidadProductos = calculateCartCount(carrito);

    const finalizarCompra = () => {
        setLastOrder(generateOrderReceipt(totalCarrito, cantidadProductos));
        setShowModal(true);
        vaciarCarrito();
        onHide();
    };

    return (
        <>
            <Offcanvas
                show={show}
                onHide={onHide}
                placement="end"
                style={{
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    borderLeft: '1px solid var(--border-light)',
                    width: '400px',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                }}
            >
                <Offcanvas.Header
                    closeButton
                    className="border-bottom"
                    style={{
                        borderColor: 'var(--border-light)',
                        background: 'var(--bg-light)',
                    }}
                >
                    <Offcanvas.Title
                        className="d-flex align-items-center gap-2"
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <FiShoppingCart style={{ color: 'var(--accent-primary)' }} />
                        Mi Carrito
                        <span
                            style={{
                                background: 'var(--accent-primary)',
                                color: '#fff',
                                padding: '2px 8px',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                marginLeft: '8px',
                            }}
                        >
                            {cantidadProductos}
                        </span>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                    {carrito.length === 0 ? (
                        <CartEmptyState />
                    ) : (
                        <>
                            <div
                                style={{
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '1rem',
                                }}
                            >
                                {carrito.map((producto) => (
                                    <CartItem
                                        key={producto.id}
                                        producto={producto}
                                        onEliminar={eliminarProducto}
                                        onAumentar={(id) => actualizarCantidad(id, 1)}
                                        onDisminuir={(id) => actualizarCantidad(id, -1)}
                                    />
                                ))}
                            </div>

                            <CartFooter total={totalCarrito} onCheckout={finalizarCompra} />
                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>

            <CheckoutSuccessModal
                show={showModal}
                onHide={() => setShowModal(false)}
                order={lastOrder}
            />
        </>
    );
};

export default CartOffcanvas;
