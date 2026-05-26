import { create } from 'zustand';

const useCommentStore = create((set, get) => ({
    comments: [],
    loading: false,
    error: null,
    hasFetched: false,

    fetchComments: async (limit = 8, force = false) => {
        if (get().hasFetched && !force) return;

        set({ loading: true, error: null });
        try {
            const response = await fetch(
                `https://dummyjson.com/comments?limit=${limit}&select=id,body,likes,user`
            );
            if (!response.ok) throw new Error(`Error en la respuesta (Status: ${response.status})`);

            const data = await response.json();

            set({ comments: data.comments || [], loading: false, hasFetched: true });
        } catch (err) {
            set({ error: err.message || 'Error al cargar comentarios', loading: false });
        }
    },
}));

export default useCommentStore;
