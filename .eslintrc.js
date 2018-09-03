module.exports = {
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['demo/routes.js']
    }],
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    'no-unused-expressions': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'max-len': 0
  }
};
