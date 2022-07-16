# vue-ts

## 项目结构

```
|- .husky
  |- _ // husky 配置目录
  |- pre-commit // 配置git pre-commit钩子函数
|- .vscode // vscode工作区配置
|- mock // mock数据处理
|- public
|- src // 根目录
  |- api // 接口请求
  |- assets // 静态资源
    |- fonts // 字体资源
    |- images // 图像资源
    |- styles // 样式资源
  |- components // 全局组件
  |- plugins // 插件相关
  |- router // 路由相关
  |- sotre // 状态管理相关
  |- utils // 全局工具函数
    |- http // http相关
      |- axios // 封装axios
  |- views // 视图
  |- App.vue
  |- main.ts
|- types // 类型声明文件夹
|- .eslintrc.js // eslint配置文件
|- .gitignore // git提交忽略文件
|- .lintstagedrc.json // lint-staged配置文件
|- .prettierrc.js // prettierrc配置文件
|- .stylelintignore // stylelint忽略文件
|- .stylelintrc.js // stylelint配置文件
|- package-lock.json // 依赖包版本锁定
|- package.json // 依赖配置文件
|- index.html
|- README.md // 说明文件
|- tsconfig.json // ts主配置文件
|- tsconfig.node.json // ts子配置文件，子配置文件优先级更高，注意覆盖、应用范围问题
|- vite.config.ts // vite配置文件
```

## package.json

### scripts 脚本

`dev`：启动项目

`build`：打包

`prepare`：`husky`初始化

### dependenciesd 依赖

`axios`：`http`库

`nprogress`： 进度条

`pinia`：状态管理

### devDependencies 依赖

`@types/node`：`node.js`的`typescript`声明包

`@types/nprogress`：`nprogress.js`的`typescript`声明包

`@typescript-eslint/eslint-plugin`：使得`ESLint` 可以校验`typescript`

`@typescript-eslint/parser`：`ESLint` 校验 `typescript` 的规则

`eslint`：代码格式校验

> 在使用 vscode 编辑器时，下载 eslint 扩展

`eslint-config-prettier`： `prettier` 官方提供的一款解决`ESLint` 的规则和 `Prettier` 的规则冲突问题的依赖

`eslint-plugin-vue`： `Vue.js`的官方 `ESLint` 插件

`husky`：操作 `git` 钩子的工具

`lint-staged`：本地暂存代码检查工具

`mockjs`：生成随机数据，拦截 `Ajax`请求，模拟后端请求

`prettier`：代码风格美化

> 在使用 vscode 编辑器时，下载 prettier 扩展

`sass`： `sass`预处理器，不安装的话无法在项目中使用`scss`语法

`stylelint`^13.13.1：`css`代码格式校验，安装指定 13.13.1 版本，不然报错

> 在使用 vscode 编辑器时，下载 stylelint 扩展，并且把扩展版本退为 v0.87.6，需要注意的是，vscode 默认是会自动更新扩展的，需要禁用掉

`stylelint-config-standard`^22.0.0：`stylelint` 官方提供的扩展，内置了大量推荐的 `css` 相关规则，安装指定 22.0.0 版本，不然报错

`stylelint-order`：与 `css` 属性顺序相关的插件，支持自定义属性的书写顺序（例如：先写定位属性，再写盒模型），并且能够帮助你自动修正属性的顺序

`stylelint-scss`^3.21.0：`stylelint` 适配 `scss` 预处理语法的插件

`vite-plugin-mock`：`vite`的一个`mock`插件，基于`mockjs`开发。并同时支持本地环境和生产环境。本地使用`connect`服务中间件，在线使用`mockjs`
