// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'no-var': 'error',
    'no-tabs': 2,
    'max-len': ['error', {
      'code': 80,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreComments': true
    }],
    'no-console': [1, {
      allow: ['warn', 'error']
    }],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 1,
    'no-warning-comments': [1, {
      'terms': ['hardcoded'], location: 'anywhere',
    }],
    'no-tabs': 2,
    'comma-dangle': [1, 'always-multiline'],
    'eol-last': [1, 'always'],
    'vue/max-attributes-per-line': [1, {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],

    'vue/valid-v-for': 2,
    'vue/attributes-order': 0,
    'indent': 2,
    'vue/order-in-components': 2,
    'vue/name-property-casing': [2, 'kebab-case'],
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': [1, {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/attribute-hyphenation': 2,
    'vue/component-name-in-template-casing': [2, 'kebab-case'],
    'vue/html-end-tags': 2,
    'vue/html-indent': 2,
    'vue/html-quotes': 2,
    'vue/html-self-closing': 2,
    'vue/multiline-html-element-content-newline': 2,
    'vue/mustache-interpolation-spacing': 2,
    'vue/no-async-in-computed-properties': 2,
    'vue/no-confusing-v-for-v-if': 2,
    'vue/no-dupe-keys': 2,
    'vue/no-duplicate-attributes': 2,
    'vue/no-multi-spaces': 2,
    'vue/no-reserved-keys': 2,
    'vue/no-shared-component-data': 2,
    'vue/no-side-effects-in-computed-properties': 2,
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    'vue/no-template-key': 2,
    'vue/no-textarea-mustache': 2,
    'vue/no-unused-components': 2,
    'vue/no-unused-vars': 2,
    'vue/no-v-html': 1,
    'vue/prop-name-casing': 2,
    'vue/require-default-prop': 2,
    'vue/require-prop-types': 2,
    'vue/require-valid-default-prop': 2,
    'vue/this-in-template': 2,
    'vue/v-bind-style': 2,
    'vue/v-on-style': 2,
    'vue/valid-template-root': 2,
    'vue/valid-v-bind': 2,
    'vue/valid-v-else-if': 2,
    'vue/valid-v-else': 2,
    'vue/valid-v-model': 2,
    'vue/valid-v-on': 2,

    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-nesting': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/prefer-await-to-then': 'warn'
  }
}
