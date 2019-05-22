[![ice](https://img.shields.io/badge/developing%20with-ICE-2077ff.svg)](https://github.com/alibaba/ice)

# 日常打卡

## 基于alibaba的飞冰构建项目


## 使用

- 启动调试服务: `npm start`
- 构建 dist: `npm run build`

## 目录结构

- react-router @4.x 默认采用 hashHistory 的单页应用
- 入口文件: `src/index.js`
- 导航配置: `src/menuConfig.js`
- 路由配置: `src/routerConfig.js`
- 路由入口: `src/router.jsx`
- 布局文件: `src/layouts`
- 通用组件: `src/components`
- 页面文件: `src/pages`

## 效果图

![screenshot_1](https://i.loli.net/2019/05/13/5cd8d7f1bcf7413813.png)
![screenshot_1](https://i.loli.net/2019/05/13/5cd8d81ea0fa541407.png)

### 添加了文件上传部分 2019/5/22
![screenshot_1](https://i.loli.net/2019/05/22/5ce502647222491219.png)

## 数据存储方案
- localstorage (No Redux)

## 主要逻辑
- SortCardList.jsx

## 注意
- 调整用于测试的console.log() 避免内存泄漏
