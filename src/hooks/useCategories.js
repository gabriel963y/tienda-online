import { useEffect } from 'react';
import useCategoryStore from '../store/useCategoryStore.js';

export default function useCategories() {
    const { categories, loading, fetchCategories } = useCategoryStore();

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return { categories, loading };
}
