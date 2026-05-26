import { FaStar } from 'react-icons/fa';
import { formatCategory } from '../../utils/categoryUtils.js';

const ProductListItem = ({ item, index, isActive, onHover, isMobile, isDesktop }) => (
    <div
        onMouseEnter={() => onHover(index)}
        className="list-group-item d-flex align-items-center justify-content-between p-3 border-0"
        style={{
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            paddingLeft: isActive && isDesktop ? '20px' : '16px',
            background: isActive ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
            borderLeft: isActive ? '4px solid var(--accent-primary)' : '4px solid transparent',
            borderBottom: '1px solid var(--border-light)',
        }}
    >
        <div className="d-flex align-items-center gap-3">
            <span
                className="fw-bold font-monospace opacity-50"
                style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                    width: '28px',
                }}
            >
                {String(index + 1).padStart(2, '0')}
            </span>

            <div
                className="rounded-3 p-1 d-flex align-items-center justify-content-center"
                style={{
                    width: isMobile ? '56px' : '64px',
                    height: isMobile ? '56px' : '64px',
                    overflow: 'hidden',
                    background: 'var(--bg-light)',
                    border: '1px solid var(--border-light)',
                }}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>

            <div>
                <h6
                    className="mb-1 fw-bold"
                    style={{
                        fontSize: isMobile ? '0.85rem' : '0.98rem',
                        color: 'var(--text-main)',
                    }}
                >
                    {item.title}
                </h6>
                <span
                    className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-10 text-uppercase"
                    style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.05em',
                    }}
                >
                    {formatCategory(item.category)}
                </span>
            </div>
        </div>

        <div className="d-flex align-items-center gap-3">
            <div className="d-none d-sm-flex text-warning gap-1" style={{ fontSize: '0.72rem' }}>
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
            </div>

            <span
                className={`badge px-3 py-2 rounded-pill fw-bold ${
                    isActive ? 'bg-success text-white' : 'bg-success bg-opacity-10 text-success'
                }`}
                style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: isMobile ? '0.85rem' : '0.92rem',
                    transition: 'all 0.2s ease',
                }}
            >
                ${item.price}
            </span>
        </div>
    </div>
);

export default ProductListItem;
