// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: ['node_modules', 'dist', 'build', '**/*.config.js', 'storybook-static', '.storybook', '**/*.d.ts', '**/*.js'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['**/*.stories.tsx', '**/*.test.tsx'],
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
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
    {
        files: ['**/*.stories.tsx', '**/*.test.tsx'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
];