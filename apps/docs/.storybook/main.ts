// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    stories: ['../../../packages/react/src/**/*.stories.tsx'],
    addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-docs")],
    framework: getAbsolutePath("@storybook/react-vite"),

    viteFinal: async (config) => {
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
        };
    },

    typescript: {
        check: false,
    }
};

export default config;

function getAbsolutePath(value: string): any {
    return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}