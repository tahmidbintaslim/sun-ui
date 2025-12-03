// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../../../packages/react/src/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),

  viteFinal: async (config) => {
    // Configure Vite to handle "use client" directives from MUI
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '@sun-ui/tokens': path.resolve(__dirname, '../../../packages/tokens/src'),
          '@sun-ui/theme': path.resolve(__dirname, '../../../packages/theme/src'),
          '@sun-ui/react': path.resolve(__dirname, '../../../packages/react/src'),
        },
      },
      ssr: {
        ...config.ssr,
        noExternal: [
          '@mui/material',
          '@mui/system',
          '@mui/utils',
          '@emotion/react',
          '@emotion/styled',
        ],
      },
    };
  },

  typescript: {
    check: false,
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
