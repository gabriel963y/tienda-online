import { create } from 'zustand';
import { ordenarYCompletarCategorias, procesarCategoria } from '../utils/categoryUtils';

const useCategoryStore = create((set, get) => ({
    categories: [],
    loading: false,
    error: null,
    hasFetched: false,

    fetchCategories: async (force = false) => {
        if (get().hasFetched && !force) return;

        set({ loading: true, error: null });
        try {
            const res = await fetch('https://dummyjson.com/products/categories');
            if (!res.ok) throw new Error(`Error en la respuesta (Status: ${res.status})`);

            const data = await res.json();

            const seleccionadas = ordenarYCompletarCategorias(data);

            const promesas = seleccionadas.map((cat, index) => {
                return procesarCategoria(cat, index);
            });

            const resultadoFinal = await Promise.all(promesas);

            set({ categories: resultadoFinal, loading: false, hasFetched: true });
        } catch (err) {
            set({ error: err.message || 'Error al cargar categorías', loading: false });
        }
    },
}));

export default useCategoryStore;
