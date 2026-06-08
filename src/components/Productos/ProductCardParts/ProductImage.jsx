import { FiHeart } from 'react-icons/fi';

const ProductImage = ({
    image,
    title,
    isNew,
    isFeatured,
    isHovered,
    isFavorite,
    onToggleFavorite,
}) => {
    return (
        <div
            style={{
                position: 'relative',
                padding: '1.5rem',
                background: 'rgba(0,0,0,0.02)',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                src={image}
                alt={title}
                style={{
                    height: '180px',
                    width: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            />

            <button
                className="position-absolute top-0 end-0 m-3 border-0 rounded-circle d-flex align-items-center justify-content-center"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onToggleFavorite();
                }}
                style={{
                    width: '38px',
                    height: '38px',
                    background: isFavorite ? '#f43f5e' : 'var(--bg-light)',
                    color: isFavorite ? '#fff' : 'var(--text-muted)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    zIndex: 10,
                }}
                onMouseEnter={(e) => {
                    if (!isFavorite) {
                        e.currentTarget.style.color = '#f43f5e';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    } else {
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isFavorite) {
                        e.currentTarget.style.color = 'var(--text-muted)';
                    }
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <FiHeart
                    style={{
                        fill: isFavorite ? '#f43f5e' : 'transparent',
                        transition: 'fill 0.3s ease',
                    }}
                />
            </button>

            {isNew && (
                <span
                    className="position-absolute top-0 start-0 m-3 rounded-pill fw-bold"
                    style={{
                        padding: '6px 12px',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--accent-primary)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    Nuevo
                </span>
            )}
            {isFeatured && (
                <span
                    className={`position-absolute ${isNew ? 'bottom-0 start-0' : 'top-0 start-0'} m-3 rounded-pill fw-bold`}
                    style={{
                        padding: '6px 12px',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        background: 'rgba(245, 158, 11, 0.15)',
                        color: '#f59e0b',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    Destacado
                </span>
            )}
        </div>
    );
};

export default ProductImage;
