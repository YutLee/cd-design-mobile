# Timeline 时间轴
展示的时间流信息。

## 使用场景
- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
reverse | 节点排序 | boolean | false
active | 当前节点索引 | number | -

### Timeline.Item
时间轴的每一个节点。
属性 | 说明 | 类型 | 默认值
---|---|---|---
className | 类名 | string | -
dot | 自定义时间轴点 | ReactNode | -
