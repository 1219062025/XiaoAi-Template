module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
    'vue/setup-compiler-macros': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    '.eslintrc-auto-import.json'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': ['vue', '@typescript-eslint'],
  'rules': {
    // 关闭vue的事件监听v-on必须用连字符校验
    'vue/v-on-event-hyphenation': 'off',
    // 关闭vue单文件名必须为多字校验
    'vue/multi-word-component-names': 'off',
    // 关闭vue自定义组件标签内容为空时需要自闭合校验
    'vue/html-self-closing': 'off',
    'vue/comment-directive': 'off',
    // 允许使用typescript的非空断言操作符
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 允许使用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 允许使用 const xx = require('module')的形式导入模块
    '@typescript-eslint/no-var-requires': 'off'
  }
};
