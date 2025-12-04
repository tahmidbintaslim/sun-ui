import storybookTest from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Use SB_URL environment variable for CI debugging (points to deployed Storybook)
// Falls back to localhost for local development
const storybookUrl = process.env.SB_URL || 'http://localhost:6006';

export default defineConfig({
  plugins: [
    // This plugin reads your main.ts to find stories
    storybookTest({
      configDir: '.storybook',
      // Use the environment variable for CI debugging
      storybookUrl,
    }),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    // Register the setup file here
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      // Point to dist for proper ESM module resolution
      '@sun-ui/tokens': path.resolve(__dirname, '../../packages/tokens/dist'),
      '@sun-ui/theme': path.resolve(__dirname, '../../packages/theme/dist'),
      '@sun-ui/react': path.resolve(__dirname, '../../packages/react/src'),
      '@emotion/react': path.dirname(require.resolve('@emotion/react/package.json')),
      '@emotion/styled': path.dirname(require.resolve('@emotion/styled/package.json')),
      react: path.dirname(require.resolve('react/package.json')),
      'react-dom': path.dirname(require.resolve('react-dom/package.json')),
    },
  },
  optimizeDeps: {
    include: ['@mui/material', '@mui/system', '@mui/utils', '@emotion/react', '@emotion/styled'],
    // Exclude workspace packages from pre-bundling - they're resolved via aliases
    exclude: ['@sun-ui/tokens', '@sun-ui/theme', '@sun-ui/react'],
  },
});
