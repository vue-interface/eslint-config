import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
    ...pluginVue.configs['flat/recommended'],
    ...vueTsEslintConfig(),
    {
        rules: {
            'vue/component-tags-order': ['error', {
                order: ['script', 'template', 'style'],
            }],
            'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
                registeredComponentsOnly: false,
                ignores: [],
            }],
            'quotes': [2, 'single', { avoidEscape: true }],
            'vue/multi-word-component-names': 0,
            'vue/html-indent': ['error', 4, {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 1,
                alignAttributesVertically: false,
                ignores: [],
            }],
            'vue/html-closing-bracket-newline': ['error', {
                singleline: 'never',
                multiline: 'never',
            }],
            'keyword-spacing': ['error', {
                before: true,
                after: true,
                overrides: {
                    if: { after: false },
                    while: { after: false },
                    for: { after: false },
                },
            }],
            'indent': ['error', 4],
            'semi': [2, 'always'],
            'object-curly-spacing': ['error', 'always'],
            'space-before-blocks': ['error', 'always'],
        },
    },
];
