import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2020',
  // Every component uses MUI styled() and React hooks, so the whole bundle is a
  // client module for React Server Components frameworks (Next.js App Router).
  banner: { js: '"use client";' },
});
