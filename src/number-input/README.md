# NumberInput 数字输入框
通过鼠标或键盘，输入范围内的数值。

## 使用场景
- 常用于购物车数量。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
max | 最大值 | number | 999999
min | 最小值 | number | 0
defaultValue | 输入框默认内容 | number | 0
disabled | 是否禁用 | boolean | false
step | 每次改变步数，大于0的整数 | number | 1
value | 输入框内容 | number | -
editable | 是否可编辑 | boolean | true
onChange | 输入框内容变化时的回调 | function(value: number) | -
onStep | 点击加减号的回调 | (value: number, step: number, type: 'up' | 'down') => void | -
