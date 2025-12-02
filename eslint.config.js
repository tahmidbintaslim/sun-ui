// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [{
    ignores: ['node_modules', 'dist', 'build', '**/*.config.js', 'storybook-static'],
}, eslint.configs.recommended, ...tseslint.configs.recommended, {
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            project: true,
        },
    },
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
    },
}, ...storybook.configs["flat/recommended"]];
