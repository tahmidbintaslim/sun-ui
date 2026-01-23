// @ts-ignore
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@smug-ui/tokens': path.resolve(__dirname, '../../../packages/tokens/src'),
      '@smug-ui/theme': path.resolve(__dirname, '../../../packages/theme/src'),
      '@smug-ui/react': path.resolve(__dirname, '../../../packages/react/src'),
    },
  },
});
