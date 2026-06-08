import { Modal } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';
import ReactDOM from 'react-dom';

const CheckoutSuccessModal = ({ show, onHide, order }) => {
    if (typeof document === 'undefined') return null;

    return ReactDOM.createPortal(
        <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            contentClassName="border-0 shadow-lg bg-transparent"
            style={{ zIndex: 10000 }}
        >
            <div
                style={{
                    background: 'var(--bg-light)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {/* Decoración superior */}
                <div
                    style={{
                        background:
                            'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--bg-light)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: '-40px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        }}
                    >
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FiCheckCircle size={32} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                    </div>
                </div>

                <Modal.Body className="px-4 pt-5 pb-4 text-center mt-3">
                    <h4
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 800,
                            color: 'var(--text-main)',
                            marginBottom: '8px',
                        }}
                    >
                        ¡Pago Exitoso!
                    </h4>
                    <p
                        style={{
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.95rem',
                            marginBottom: '24px',
                        }}
                    >
                        Tu pedido ha sido procesado correctamente y ya estamos preparándolo.
                    </p>

                    <div
                        className="p-3 text-start rounded mb-4"
                        style={{
                            background: 'var(--bg-subtle)',
                            border: '1px solid var(--border-light)',
                        }}
                    >
                        <div
                            className="d-flex justify-content-between mb-2 pb-2 border-bottom"
                            style={{ borderColor: 'var(--border-light)' }}
                        >
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                N° de Orden
                            </span>
                            <span
                                style={{
                                    fontFamily: 'var(--font-tech)',
                                    fontWeight: 700,
                                    color: 'var(--text-main)',
                                    fontSize: '0.9rem',
                                }}
                            >
                                {order.id}
                            </span>
                        </div>
                        <div
                            className="d-flex justify-content-between mb-2 pb-2 border-bottom"
                            style={{ borderColor: 'var(--border-light)' }}
                        >
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                Productos
                            </span>
                            <span
                                style={{
                                    fontWeight: 600,
                                    color: 'var(--text-main)',
                                    fontSize: '0.9rem',
                                }}
                            >
                                {order.count}
                            </span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 pt-1">
                            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                                Total Pagado
                            </span>
                            <span
                                style={{
                                    fontFamily: 'var(--font-tech)',
                                    fontWeight: 800,
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.2rem',
                                }}
                            >
                                ${order.total.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={onHide}
                        className="w-100 rounded-pill border-0 py-3"
                        style={{
                            background: 'var(--text-main)',
                            color: 'var(--bg-light)',
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
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
                        Seguir Comprando
                    </button>
                </Modal.Body>
            </div>
        </Modal>,
        document.body
    );
};

export default CheckoutSuccessModal;
