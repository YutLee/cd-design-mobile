# Icon 图标
语义化的矢量（svg）图形。

## 使用场景

代替部分文案，使界面更简洁。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
src | 图标源（svg路径） | string | -
color | 图标颜色是否继承父元素color值，`inherit`继承 | string | 
fill | 图标填充色 | string | 
childFill | 图标子元素填充色 | string[] | []
size | 图标大小 | `s` \| `m` \| `l` \| `xl` \| number | `m`
align | 图标垂直对齐方式 | `top` \| `middle` \| `bottom` | `middle`
onClick | 图标点击回调事件 | (event) => void | -
