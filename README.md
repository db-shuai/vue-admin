<p align="center">
  <img width="320" src="https://wpimg.wallstcn.com/ecc53a42-d79b-42e2-8852-5126b810a4c8.svg">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.3.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/releases">
    <img src="https://img.shields.io/github/release/PanJiaChen/vue-element-admin.svg" alt="GitHub release">
  </a>
</p>

# vue-admin

 vue+vuex+vue-router+axios+elementUI

> road of front-end 徐小七
        目录结构├── build                      // 构建相关  
        ├── config                     // 配置相关
        ├── src                        // 源代码
        │   ├── api                    // 所有请求
        │   ├── assets                 // 主题 字体等静态资源
        │   ├── components             // 全局公用组件
        │   ├── directive              // 全局指令
        │   ├── filtres                // 全局 filter
        │   ├── icons                  // 项目所有 svg icons
        │   ├── lang                   // 国际化 language
        │   ├── mock                   // 项目mock 模拟数据
        │   ├── router                 // 路由
        │   ├── store                  // 全局 store管理
        │   ├── styles                 // 全局样式
        │   ├── utils                  // 全局公用方法
        │   ├── vendor                 // 公用vendor
        │   ├── views                   // view
        │   ├── App.vue                // 入口页面
        │   ├── main.js                // 入口 加载组件 初始化等
        │   └── permission.js          // 权限管理
        ├── static                     // 第三方不打包资源
        │   └── Tinymce                // 富文本
        ├── .babelrc                   // babel-loader 配置
        ├── eslintrc.js                // eslint 配置项
        ├── .gitignore                 // git 忽略项
        ├── favicon.ico                // favicon图标
        ├── index.html                 // html模板
        └── package.json               // package.json
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
