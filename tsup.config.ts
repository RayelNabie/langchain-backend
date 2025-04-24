import { defineConfig } from 'tsup';
import pkg from './package.json';

export default defineConfig({
  entry: ['src'],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {})
  ]
});
