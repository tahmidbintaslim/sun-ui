import { defineConfig } from 'tsup';

// package.json must keep "type": "commonjs". Under "type": "module", esbuild
// compiles default imports such as `import Box from '@mui/material/Box'` in the
// CJS build with Node-mode interop, which ignores __esModule, so require() users
// get the module object instead of the component (Progress, Rating, Slider and
// ToggleButtonGroup failed to render). tsup writes CJS to index.js, ESM to index.mjs.
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
