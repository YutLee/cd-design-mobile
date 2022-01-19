# Tag 标签
进行标记和分类的小标签。

## 使用场景
- 用于标记事物的属性和维度。
- 进行分类。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
closable | 标签是否可以关闭（点击默认关闭） | boolean | false
closeIcon | 自定义关闭按钮 | ReactNode | -
icon | 设置图标 | ReactNode | -
shape | 形状 | `default` \| `circle` \| `round` | `default`
size | 大小 | `s` \| `m` | `m`
type | 类型 | `default` \| `coupon` | `default`
visible | 是否显示标签 | boolean | true
onClose | 关闭时的回调（可通过 event.preventDefault() 来阻止默认行为） | (event) => void | -
