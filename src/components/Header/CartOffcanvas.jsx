import { Offcanvas } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';

const CartOffcanvas = ({ show, onHide }) => {
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
    );
};

export default CartOffcanvas;
