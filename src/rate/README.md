# Rate 评分
评分组件。

## 使用场景
- 对评价进行展示。
- 对事物进行快速的评级操作。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
allowClear | 是否允许再次点击后清除 | boolean | true
allowHalf | 是否允许半选 | boolean | false
count | star 总数 | number | 5
defaultValue | 默认值 | number | 0
disabled | 只读，无法进行交互 | boolean | false
icon | 自定义图标 | ReactNode | -
value | 当前数，受控值 | number | -
onChange | 选择时的回调 | function(value: number) | -

