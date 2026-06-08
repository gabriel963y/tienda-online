export const addCartItem = (cart, product, quantity = 1) => {
    const normalizedProduct = {
        id: product.id,
        nombre: product.nombre || product.title,
        precio: product.precio || product.price,
        imagen: product.imagen || product.image,
    };

    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
        return cart.map((item) =>
            item.id === product.id ? { ...item, cantidad: item.cantidad + quantity } : item
        );
    }

    return [...cart, { ...normalizedProduct, cantidad: quantity }];
};

export const updateCartItemQuantity = (cart, productId, quantityDiff) => {
    return cart.map((product) =>
        productId === product.id
            ? {
                  ...product,
                  cantidad: Math.max(1, Math.min(10, product.cantidad + quantityDiff)),
              }
            : product
    );
};

export const removeCartItem = (cart, productId) => {
    return cart.filter((product) => product.id !== productId);
};

export const calculateCartTotal = (cart) => {
    return cart.reduce((total, product) => total + product.precio * product.cantidad, 0);
};

export const calculateCartCount = (cart) => {
    return cart.reduce((count, product) => count + product.cantidad, 0);
};

export const generateOrderReceipt = (total, count) => {
    return {
        total,
        count,
        id: `ORD-${Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(6, '0')}`,
    };
};
