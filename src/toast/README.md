# Toast 消息提示
展示操作反馈信息。

## 使用场景
- 可提供成功、警告和错误等反馈信息。
- 居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
className | 自定义类名 | string | -
type | 提示类型 | `default` \| `loading` \| `success` \| `error` | `default`
content | 提示内容 | ReactNode | -
duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3
icon | 自定义图标 | ReactNode | -
style | 自定义内联样式 | CSSProperties | -
onClose | 关闭时触发的回调函数 | function | -

