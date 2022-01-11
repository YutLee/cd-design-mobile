# Switch 开关
开关选择器。

## 使用场景

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
checked | 是否选中 | boolean | false
checkedChildren | 选中时的内容 | ReactNode | -
className | 样式类 | string | -
disabled | 是否禁用 | boolean | false
loading | 加载中的开关 | boolean | false
size | 开关大小 | `s` \| `m` \| `l` | `m`
unCheckedChildren | 非选中时的内容 | ReactNode | -
onChange | 变化时回调函数 | function(checked: boolean, event: Event) | -
onClick | 点击时回调函数 | function(checked: boolean, event: Event) | -
