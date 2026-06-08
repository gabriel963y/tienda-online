import { createContext, useContext, useState, useEffect } from 'react';
import {
    getWishlistFromStorage,
    saveWishlistToStorage,
    toggleProductInWishlist,
    isProductInWishlist,
} from '../../services/wishlistServices';
import { toast } from 'react-toastify';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        setWishlist(getWishlistFromStorage());
    }, []);

    const toggleFavorite = (product) => {
        const isFav = isProductInWishlist(wishlist, product.id);
        const newWishlist = toggleProductInWishlist(wishlist, product);

        setWishlist(newWishlist);
        saveWishlistToStorage(newWishlist);

        if (isFav) {
            toast.info(`Eliminado de favoritos: ${product.title}`, {
                style: {
                    background: 'var(--bg-light)',
                    color: 'var(--text-main)',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-sans)',
                    border: '1px solid var(--border-light)',
                },
                progressStyle: { background: '#f43f5e' },
            });
        } else {
            toast.success(`Agregado a favoritos: ${product.title}`, {
                style: {
                    background: 'var(--bg-light)',
                    color: 'var(--text-main)',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-sans)',
                    border: '1px solid var(--border-light)',
                },
                progressStyle: { background: '#f43f5e' },
            });
        }
    };

    const checkIsFavorite = (productId) => {
        return isProductInWishlist(wishlist, productId);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleFavorite, checkIsFavorite }}>
            {children}
        </WishlistContext.Provider>
    );
};
