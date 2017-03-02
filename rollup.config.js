import svelte from 'rollup-plugin-svelte';

export default {
    entry: 'src/js/main.js',
    dest: 'public/js/main.min.js',
    format: 'iife',
    plugins: [
        svelte()
    ]
};