import { formatCategory } from '../../utils/categoryUtils.js';

const ProductSideCard = ({ product, index }) => (
    <div
        className="card rounded-4 shadow-sm p-4 w-100"
        style={{
            position: 'sticky',
            top: 110,
            transition: 'all 0.25s ease',
            background: 'var(--bg-light)',
            border: '1px solid var(--border-light)',
        }}
    >
        <span
            className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill position-absolute"
            style={{
                top: '24px',
                left: '24px',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
            }}
        >
            #0{index + 1} DESTACADO
        </span>

        <div
            className="d-flex align-items-center justify-content-center rounded-3 p-4 mb-4"
            style={{
                height: '240px',
                marginTop: '36px',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
            }}
        >
            <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                }}
            />
        </div>

        <div className="mb-4">
            <h5 className="fw-bold mb-1" style={{ color: 'var(--text-main)' }}>
                {product.title}
            </h5>
            <h4 className="fw-bold text-success" style={{ fontFamily: 'var(--font-tech)' }}>
                ${product.price}
            </h4>
        </div>

        <div
            className="pt-3 d-flex flex-column gap-2"
            style={{ borderTop: '1px dashed var(--border-light)' }}
        >
            <div className="d-flex justify-content-between">
                <small
                    className="font-monospace"
                    style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}
                >
                    DISPONIBILIDAD
                </small>
                <small
                    className="fw-bold"
                    style={{ fontSize: '0.72rem', color: 'var(--text-main)' }}
                >
                    EN STOCK
                </small>
            </div>
            <div className="d-flex justify-content-between">
                <small
                    className="font-monospace"
                    style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}
                >
                    CATEGORÍA
                </small>
                <small
                    className="fw-bold text-uppercase"
                    style={{ fontSize: '0.72rem', color: 'var(--text-main)' }}
                >
                    {formatCategory(product.category)}
                </small>
            </div>
            <div className="d-flex justify-content-between">
                <small
                    className="font-monospace"
                    style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}
                >
                    ENVÍO
                </small>
                <small
                    className="fw-bold"
                    style={{ fontSize: '0.72rem', color: 'var(--text-main)' }}
                >
                    GRATIS (+$30k)
                </small>
            </div>
        </div>
    </div>
);

export default ProductSideCard;
