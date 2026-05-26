import { create } from 'zustand';

const useProductStore = create((set, get) => ({
    products: [],
    loading: false,
    error: null,
    hasFetched: false,

    fetchProducts: async (force = false) => {
        if (get().hasFetched && !force) return;

        set({ loading: true, error: null });
        try {
            const response = await fetch('https://dummyjson.com/products?limit=0');
            if (!response.ok) throw new Error(`Error en la respuesta (Status: ${response.status})`);

            const data = await response.json();

            const formattedProducts = (data.products || []).map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.images?.[0] || item.thumbnail,
                link: `https://dummyjson.com/products/${item.id}`,
                condition: 'new',
                category: item.category,
            }));

            set({ products: formattedProducts, loading: false, hasFetched: true });
        } catch (err) {
            set({ error: err.message || 'Error al cargar productos', loading: false });
        }
    },
}));

export default useProductStore;
