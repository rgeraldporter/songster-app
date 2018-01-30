// rollup.config.js
import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'public/js/main.min.js',
    format: 'iife'
  },
  plugins: [
    svelte()
  ]
}