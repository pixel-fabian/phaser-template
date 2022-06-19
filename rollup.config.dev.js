import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/js/game.ts',
  output: {
    file: './dist/js/game.js',
    format: 'iife',
  },
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx'],
    }),
    //  We need to convert the Phaser 3 CJS modules
    commonjs({
      include: ['node_modules/eventemitter3/**', 'node_modules/phaser/**'],
      exclude: ['node_modules/phaser/src/polyfills/requestAnimationFrame.js'],
    }),
    typescript(),
  ],
};
