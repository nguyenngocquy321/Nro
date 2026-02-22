import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@images': path.resolve(__dirname, 'src/assets/Images'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@page': path.resolve(__dirname, 'src/page'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@contans': path.resolve(__dirname, 'src/contans'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@common': path.resolve(__dirname, 'src/ui/components/common'),
        },
    },

    // server: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:5000',
    //             changeOrigin: true,
    //         },
    //     },
    // },
});
