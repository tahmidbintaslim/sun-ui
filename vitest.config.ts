/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        // Include both package tests and Storybook tests
        projects: [
            'packages/*/vitest.config.ts',
            'apps/docs/vitest.config.ts',
        ],
    },
});
