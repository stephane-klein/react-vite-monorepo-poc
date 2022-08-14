import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        include: ['shared-ui']
    },
    build: {
        commonjsOptions: {
            include: [/shared-ui/]
        }
    },
    plugins: [react()]
}
);
