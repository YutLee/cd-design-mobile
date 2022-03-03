# Drawer 抽屉
屏幕边缘滑出的浮层面板。

## 使用场景
抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
className | 抽屉类名 | string | -
children | 抽屉内容 | ReactNode | -
closable | 关闭按钮显示位置，'' 表示不显示 | `right` \| `left` \| '' | `right`
closeIcon | 自定义关闭图标 | ReactNode | -
direction | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `bottom`
footer | 抽屉的页脚 | ReactNode | -
footerClassName | 抽屉的页脚类名 | string | -
mask | 是否展示遮罩 | boolean | true
maskClosable | 点击蒙层是否允许关闭 | boolean | true
maskStyle | 遮罩层样式 | CSSProperties | -
mountNode | 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom | HTMLElemen \| false | body
style | 抽屉样式 | CSSProperties | -
title | 标题 | ReactNode | -
visible | Drawer 是否可见 | boolean | false
onClick | 点击抽屉的回调 | function(event) | -
onClose | 点击遮罩层或取消按钮的回调 | function(event) | -
onFooterClick | 点击页脚的回调 | function(event) | -
