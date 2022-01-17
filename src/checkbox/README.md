# Checkbox 复选框
复选框。

## 使用场景
- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
checked | 指定当前是否选中 | boolean | false
disabled | 是否禁用 | boolean | false
invalid | 是否失效 | boolean | false
name | 名称 | string | -
value | 值 | value | -
onChange | 变化时回调函数 | function(checked: boolean, value: string | number, event: Event) | -
