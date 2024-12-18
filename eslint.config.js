import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  formatters: {
    css: true,
  },
  rules: {
    'no-console': 'warn',
    'if-newline': 'off',
  },
})
