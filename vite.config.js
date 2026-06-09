import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        allowedHosts: ['tienda-online-production-27f8.up.railway.app'],
    },
});
