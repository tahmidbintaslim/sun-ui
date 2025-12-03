// @ts-ignore
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@sun-ui/tokens': path.resolve(__dirname, '../../../packages/tokens/src'),
      '@sun-ui/theme': path.resolve(__dirname, '../../../packages/theme/src'),
      '@sun-ui/react': path.resolve(__dirname, '../../../packages/react/src'),
    },
  },
});
