export const filterProducts = (products, selectedCategory, priceRange) => {
    if (!products) return [];
    return products.filter((p) => {
        const matchCategory = selectedCategory ? p.category === selectedCategory : true;
        const matchPrice = p.price >= priceRange.min && p.price <= priceRange.max;
        return matchCategory && matchPrice;
    });
};

export const sortProducts = (products, order) => {
    if (!products) return [];
    return [...products].sort((a, b) => {
        if (order === 'az') return a.title.localeCompare(b.title);
        if (order === 'precio-asc') return a.price - b.price;
        if (order === 'precio-desc') return b.price - a.price;
        if (order === 'novedades') return b.isNew ? -1 : 1;
        if (order === 'populares') return b.isFeatured ? -1 : 1;
        return 0;
    });
};
