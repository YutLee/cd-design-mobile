# Button 按钮
按钮用于一个即时操作。

## 使用场景

标记一个或一组操作命令，响应用户点击行为，触发相应的业务逻辑。

按钮类型

- 主要按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

按钮状态

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 镂空：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载：用于异步操作等待反馈的时候，也可以避免多次提交。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
block | 按钮块级化 | boolean | false
danger | 按钮危险属性 | boolean | false
disabled | 按钮禁用状态 | boolean | false
hollow | 按钮镂空（无背景） | boolean | false
href | 按钮链接 | string | -
htmlType | button 原生的 type 值 [html属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type) | submit \| reset \| button \| menu | -
loading | 按钮加载状态 | boolean | false
shape | 按钮形状 | default \| circle \| round | default
size | 按钮大小 | s \| m \| l \| xl | m
target | 相当于 a 链接的 target 属性，href 存在时生效 | string | -
type | 按钮类型 | primary \| dashed \| link \| text \| default | default
onClick | 按钮点击回调事件 | (event) => void | -
原生 button 属性 | 支持原生 button 的其他所有属性 [button 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button) | - | -
