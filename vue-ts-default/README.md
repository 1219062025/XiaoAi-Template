# vue-ts-default

## 项目结构

```
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
  |- utils // 方法、工具
  |- views // 视图
  |- App.vue
  |- main.ts
|- types // 类型声明文件夹
	|- auto-imports.d.ts // 自动导入的API声明文件
	|- components.d.ts // 自动导入的组件声明文件
	|- env.d.ts // 全局环境声明文件
	|- global.d.ts // 全局包声明文件
|- .env // 全局环境变量
|- .env.porduction // 生产环境变量
|- .eslintrc-auto-import.json // eslint对自动导入的配置
|- .eslintrc.js // eslint配置文件
|- .gitignore // git提交忽略文件
|- .prettierrc.js // prettierrc配置文件
|- .stylelintignore // stylelint忽略文件
|- .stylelintrc.js // stylelint配置文件
|- deploy.sh // 自动化部署shell脚本
|- package-lock.json // 依赖包版本锁定
|- package.json // 依赖配置文件
|- index.html
|- README.md // 说明文件
|- tsconfig.json // ts主配置文件
|- vite.config.ts // vite配置文件
|- windi.config.ts // windiCSS配置文件
```

## package.json

### scripts 脚本

`dev`：启动项目

`build`：打包

### dependenciesd 依赖

`@eyunmy/bridge`：小爱API

`alife-logger`：ARMS前端监控

`axios`：`http`库

`dayjs`：便捷操纵`Date`对象

`fastclick`： 解决移动端浏览器300ms点击延迟和点击穿透问题

`nprogress`： 进度条

`pinia`：状态管理

`register-service-worker`：缓存服务

`vconsole`：针对手机端的开发调试工具

### devDependencies 依赖

`@types/node`：`node.js`的`typescript`声明包

`@types/nprogress`：`nprogress.js`的`typescript`声明包

`@typescript-eslint/eslint-plugin`：使得`ESLint` 可以校验`typescript`

`@typescript-eslint/parser`：`ESLint` 校验 `typescript` 的规则

`@vitejs/plugin-legacy`：`vite`打包兼容低版本浏览器

`cnjm-postcss-px-to-viewport`： 自动将`px`转化成`vw`库，本体是`postcss-px-to-viewport`，目前安装的包是个人开发者在本体上修改了部分源代码已适配不同设计稿

`eslint`：代码格式校验

> 在使用 vscode 编辑器时，下载 eslint 扩展

`eslint-config-prettier`： `prettier` 官方提供的一款解决`ESLint` 的规则和 `Prettier` 的规则冲突问题的依赖

`eslint-plugin-vue`： `Vue.js`的官方 `ESLint` 插件

`mockjs`：生成随机数据，拦截 `Ajax`请求，模拟后端请求

`prettier`：代码风格美化

> 在使用 vscode 编辑器时，下载 prettier 扩展

`rollup-plugin-visualizer`“：打包可视化分析器

`sass`： `sass`预处理器，不安装的话无法在项目中使用`scss`语法

`stylelint`^13.13.1：`css`代码格式校验，安装指定 13.13.1 版本，不然报错

> 在使用 vscode 编辑器时，下载 stylelint 扩展，并且把扩展版本退为 v0.87.6，需要注意的是，vscode 默认是会自动更新扩展的，需要禁用掉

`stylelint-config-standard`^22.0.0：`stylelint` 官方提供的扩展，内置了大量推荐的 `css` 相关规则，安装指定 22.0.0 版本，不然报错

`stylelint-order`：与 `css` 属性顺序相关的插件，支持自定义属性的书写顺序（例如：先写定位属性，再写盒模型），并且能够帮助你自动修正属性的顺序

`stylelint-scss`^3.21.0：`stylelint` 适配 `scss` 预处理语法的插件

`unplugin-auto-import`： 自动导入`API`

`unplugin-vue-components`：自动导入组件

`vite-plugin-html`：`EJS`模板能力，多页应用支持，自定义`entry`，自定义`template`

`vite-plugin-vconsole`：辅助`VConsole`在`vite`上的使用

`vite-plugin-progress`：打包进度条展示

`vite-plugin-windicss`：辅助`windicss`在`vite`上的使用

`vite-plugin-mock`：`vite`的一个`mock`插件，基于`mockjs`开发。并同时支持本地环境和生产环境。本地使用`connect`服务中间件，在线使用`mockjs`

`windicss`：原子`css`，支持在`html`元素上通过定制好的类名来快速实现样式，而不需要自己去定义类名

