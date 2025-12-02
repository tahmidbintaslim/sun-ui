import storybookTest from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    // This plugin reads your main.ts to find stories
    storybookTest({ configDir: '.storybook' }),
  ],
  test: {
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
      '@sun-ui/tokens': path.resolve(__dirname, '../../packages/tokens/src'),
      '@sun-ui/theme': path.resolve(__dirname, '../../packages/theme/src'),
      '@sun-ui/react': path.resolve(__dirname, '../../packages/react/src'),
    },
  },
});
