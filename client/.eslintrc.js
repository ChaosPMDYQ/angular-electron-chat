module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: [
        '*.html',
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended',
      ],
      rules: {},
    }, {
      files: [
        '*.ts',
        '*.js',
      ],
      parserOptions: {
        project: [
          'tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'airbnb-base',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
      },
    },
  ],
};
