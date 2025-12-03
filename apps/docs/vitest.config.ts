import storybookTest from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

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
      '@emotion/react': path.dirname(require.resolve('@emotion/react/package.json')),
      '@emotion/styled': path.dirname(require.resolve('@emotion/styled/package.json')),
      react: path.dirname(require.resolve('react/package.json')),
      'react-dom': path.dirname(require.resolve('react-dom/package.json')),
    },
  },
});
