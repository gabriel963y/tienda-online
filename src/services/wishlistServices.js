export const getWishlistFromStorage = () => {
    try {
        const data = localStorage.getItem('wishlist');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error parsing wishlist from localStorage:', error);
        return [];
    }
};

export const saveWishlistToStorage = (wishlist) => {
    try {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        window.dispatchEvent(new Event('wishlist-updated'));
    } catch (error) {
        console.error('Error saving wishlist to localStorage:', error);
    }
};

export const toggleProductInWishlist = (wishlist, product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
        return wishlist.filter((item) => item.id !== product.id);
    } else {
        return [...wishlist, product];
    }
};

export const isProductInWishlist = (wishlist, productId) => {
    return wishlist.some((item) => item.id === productId);
};
