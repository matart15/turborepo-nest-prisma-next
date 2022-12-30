module.exports = {
  root: true,
  extends: ['custom'],
  ignorePatterns: ['dist', 'src/libs/generated_zod'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-empty': 'off',
    'no-useless-catch': 'off',
  },
}
