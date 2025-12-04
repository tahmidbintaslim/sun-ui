/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    // Only include package unit tests by default
    // Storybook tests require a running Storybook server and are run separately
    projects: ['packages/*/vitest.config.ts'],
  },
});
