# List 列表
通用列表。

## 使用场景
- 最基础的列表展示，可承载文字、列表、图片、段落，常用于数据展示。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
bordered | 是否展示边框 | boolean | false
className | 类名 | string | -
margin | 列表外边距 | `s` \| `m` \| `l` | `m`
padding | 列表内边距 | `s` \| `m` \| `l` | `m`
radius | 列表圆角半径 | `s` \| `m` \| `l` | `m`
contentAlign | 列表元素内容对齐方式 | `left` \| `right` \| `center` | `left`

### List.Item
属性 | 说明 | 类型 | 默认值
---|---|---|---
bottomBordered | 是否展示下边框 | boolean | false
className | 类名 | string | -
label | 列表元素标签 | ReactNode | -
children | 列表元素内容 | ReactNode | -
showArrow | 是否列表元素箭头 | boolean | false
arrow | 列表元素箭头 | ReactNode | -
padding | 列表元素内边距 | `s` \| `m` \| `l` | `m`
contentAlign | 列表元素内容对齐方式 | `left` \| `right` \| `center` | `left`
onItemClick | 点击列表时回调函数 | MouseEventHandler | -
onArrowClick | 点击箭头时回调函数 | MouseEventHandler | -
