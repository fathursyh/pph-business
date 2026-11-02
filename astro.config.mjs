// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://fathursyh.github.io',
    base: '/pph-business',
    compressHTML: true,
    vite: {
        plugins: [tailwindcss()],
    },
});
