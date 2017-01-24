weParser - 微信小程序富文本解析插件

# 使用方法

* 将 weParser 组件完整引入小程序项目

```
- weParser/
  - html2json.js
  - htmldiscode.js
  - htmlparser.js
  - weparser.wxml
  - weparser.wxss
```

* 文件引入

**js 文件**

```
// 在使用的页面 js 中引入 weParser 模块
import WeParser from '../../weParser/weparser.js';

// 使用 WeParser 处理 HTML 数据，然后返回给模板文件
let data = WeParser('html', data.content);
```

**wxml 文件**

```
<!-- 在对应页面的 wxml 文件中引入 weParser 模块 -->
<import src="../../weParser/weparser.wxml"/>

<!-- 在需要渲染 HTML 数据的地方，使用模板渲染 -->
<template is="weParser" data="{{ weParserData: data }}"/>
```

**wxss 文件**

```
/* 在 app.wxss 中引入默认的样式文件 */
@import "/weParser/weparser.wxss";
```