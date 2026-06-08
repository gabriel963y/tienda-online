import { create } from 'zustand';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

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
                description: item.description,
                isNew: item.id > 174,
                isFeatured: Math.random() > 0.85,
                isDiscounted: Math.random() > 0 && item.price > 50,
                discount: pick([0.9, 0.85, 0.75, 0.5]),
                comments: item.reviews || [],
            }));

            set({ products: formattedProducts, loading: false, hasFetched: true });
        } catch (err) {
            set({ error: err.message || 'Error al cargar productos', loading: false });
        }
    },
}));

export default useProductStore;
