/*
  ESLint statically analyzes your code to quickly find problems.
  ESLint is built into most text editors and you can run ESLint as
  part of your continuous integration pipeline.

  Many problems ESLint finds can be automatically fixed.

*/
const { NODE_ENV = '' } = process.env

const isEnvProduction = NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020
  },
  plugins: ['import', 'simple-import-sort', 'sort-exports', 'sort-destructure-keys'],
  rules: {
    semi: ['error', 'never'],
    'no-console': isEnvProduction ? 'error' : 'warn',
    'no-debugger': isEnvProduction ? 'error' : 'warn',
    'no-unreachable': isEnvProduction ? 'error' : 'warn',

    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'never'],
    'sort-destructure-keys/sort-destructure-keys': ['error'],
    'no-unused-vars': [
      isEnvProduction ? 'error' : 'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_', args: 'all' }
    ],

    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
    'simple-import-sort/imports': isEnvProduction ? 'error' : 'warn',
    'simple-import-sort/exports': isEnvProduction ? 'error' : 'warn',
    'import/first': isEnvProduction ? 'error' : 'warn',
    'import/newline-after-import': isEnvProduction ? 'error' : 'warn',
    'import/no-duplicates': isEnvProduction ? 'error' : 'warn',

    // Vue specific
    'vue/no-unused-vars': [isEnvProduction ? 'error' : 'warn', { ignorePattern: '^_' }],
    'vue/require-prop-type-constructor': 'error',
    'vue/require-default-prop': 'error',
    'vue/prop-name-casing': 'error',
    'vue/order-in-components': 'error',
    'vue/custom-event-name-casing': ['error', { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] }],
    'vue/no-use-v-if-with-v-for': ['error', { allowUsingIterationVar: true }],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          /*
            DEFINITION e.g. 'is', 'v-is'
            LIST_RENDERING e.g. 'v-for item in items'
            CONDITIONALS e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
            RENDER_MODIFIERS e.g. 'v-once', 'v-pre'
            GLOBAL e.g. 'id'
            UNIQUE e.g. 'ref', 'key', 'v-slot', 'slot'
            TWO_WAY_BINDING e.g. 'v-model'
            OTHER_DIRECTIVES e.g. 'v-custom-directive'
            OTHER_ATTR e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
            EVENTS e.g. '@click="functionCall"', 'v-on="event"'
            CONTENT e.g. 'v-text', 'v-html'
          */
          ['DEFINITION', 'UNIQUE', 'GLOBAL'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          ['LIST_RENDERING', 'RENDER_MODIFIERS', 'CONTENT', 'CONDITIONALS']
        ],
        alphabetical: false
      }
    ],
    "vue/html-self-closing": ["warn", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 4
      },      
      "multiline": {
        "max": 1
      }
    }]
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
        node: true
      },
      rules: {
        'simple-import-sort/imports': 'off',
        'import/order': ['error', { 'newlines-between': 'always' }]
      }
    }
  ]
}
