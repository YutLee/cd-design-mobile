# Grid 栅格
栅格系统。

## 概述

- 布局的栅格化系统，基于行（row）和列（col）来定义信息区块的外部框架。
- 栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。

## API
### Row
属性 | 说明 | 类型 | 默认值
---|---|---|---
align | 垂直对齐方式 | `top` \| `middle` \| `bottom` | `top`
justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` | `start`
wrap | 是否自动换行 | boolean | true

### Col
属性 | 说明 | 类型 | 默认值
---|---|---|---
flex | flex 布局属性 | string \| number | -
span | 栅格占位格数，为 0 时相当于 display: none | number | -
