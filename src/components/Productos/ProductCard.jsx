import { useState } from 'react';
import ProductImage from './ProductCardParts/ProductImage.jsx';
import ProductInfo from './ProductCardParts/ProductInfo.jsx';
import ProductActions from './ProductCardParts/ProductActions.jsx';
import { useWishlist } from '../WishlistContext/WishlistContext';

const ProductCard = ({ product, onAddToCart }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { checkIsFavorite, toggleFavorite } = useWishlist();

    const isFavorite = checkIsFavorite(product.id);

    return (
        <div
            className="d-flex flex-column h-100"
            style={{
                background: 'var(--bg-light)',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: isHovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                minWidth: '0',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ProductImage
                product={product}
                image={product.image}
                title={product.title}
                isNew={product.isNew}
                isFeatured={product.isFeatured}
                isHovered={isHovered}
                isFavorite={isFavorite}
                onToggleFavorite={() => toggleFavorite(product)}
            />

            <div className="d-flex flex-column flex-grow-1 p-4" style={{ minWidth: '0' }}>
                <ProductInfo
                    title={product.title}
                    price={product.price}
                    isDiscounted={product.isDiscounted}
                    discount={product.discount}
                />

                <ProductActions handleAddToCart={onAddToCart} id={product.id} />
            </div>
        </div>
    );
};

export default ProductCard;
