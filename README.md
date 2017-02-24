# weParser - 微信小程序富文本解析插件

## 使用方法

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

当然，有时需要处理的数据不是单一的对象，而是一个数组里的数据，此时需要遍历并处理。

```
let data = res.map((item, index, array) => {
  item.content = WeParser('html', item.content);
  return item;
});
```

这样将 `res` 中每个对象的 `content` 属性使用 weParser 单独处理，再返回数据即可。
