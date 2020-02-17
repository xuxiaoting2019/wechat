# 微信小程序项目

## 目录结构

首先，打开命令行控制台，进入工程根目录，然后执行下面的命令进行预打包：

```
.
├── app.js                     
├── app.json    
├── app.wxss
├── assets          // 图片或者样式
│   ├── image
│   └── style
├── components      // 全局可复用组件
│   └── wxzx-headerWithBack         // 所有自定义组件统一用custom-开头
│       ├── wxzx-headerWithBack.js
│       ├── wxzx-headerWithBack.json
│       ├── wxzx-headerWithBack.wxml
│       └── wxzx-headerWithBack.wxss
├── pages                   // pages中的页面按功能划分，每一个功能创建一个目录，功能下的子页面在目录下创建pages文件夹存放
│   ├── index
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── order
│   │   ├── order.js
│   │   ├── order.json
│   │   ├── order.wxml
│   │   ├── order.wxss
│   │   └── pages           // 子页面
├── project.config.json
├── readme.md
├── sitemap.json
└── utils                   // 存放通用方法，方法按功能命名，小驼峰写法，第一行写方法的用途
    ├── getData.js
    ├── getStaticData.js
    └── util.js
```


## 命名规范

### 所有变量命名采用驼峰式命名  nameList

## 数据请求

### 页面数据请求统一放置在onload中

## 书写规范
### 所有页面统一使用空格2位缩进


## css样式

### 所有的样式单位均取rpx
### 类名命名采用  aaa-bbbb
