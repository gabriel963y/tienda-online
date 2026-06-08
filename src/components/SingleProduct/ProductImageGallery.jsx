import { Image } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';

const ProductImageGallery = ({ image, title, isFavorite, onToggleFavorite }) => {
    return (
        <div
            className="p-4 rounded-4 position-relative overflow-hidden"
            style={{
                background: 'var(--bg-light)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(16, 185, 129, 0.08)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.03)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    background:
                        'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            ></div>

            <button
                className="position-absolute top-0 end-0 m-4 border-0 rounded-circle d-flex align-items-center justify-content-center"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onToggleFavorite();
                }}
                style={{
                    width: '46px',
                    height: '46px',
                    background: isFavorite ? '#f43f5e' : 'var(--bg-light)',
                    color: isFavorite ? '#fff' : 'var(--text-muted)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
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
                    size={20}
                    style={{
                        fill: isFavorite ? '#f43f5e' : 'transparent',
                        transition: 'fill 0.3s ease',
                    }}
                />
            </button>

            <Image
                src={image}
                alt={title}
                fluid
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxHeight: '450px',
                    objectFit: 'contain',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            />
        </div>
    );
};

export default ProductImageGallery;
