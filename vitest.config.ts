/// <reference types="vitest" />
// @ts-ignore
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: [path.resolve(__dirname, './packages/react/vitest.setup.ts')],
        include: ['**/*.test.{ts,tsx}'],
        exclude: ['node_modules', 'dist'],
        watch: false,
    },
});