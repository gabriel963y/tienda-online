import { useEffect } from 'react';
import useProductStore from '../store/useProductStore.js';

export default function useProducts() {
    const { products, fetchProducts } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return products;
}
