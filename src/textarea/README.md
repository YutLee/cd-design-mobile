# Textarea 多行输入框
通过鼠标或键盘输入多行内容，是最基础的表单域的包装。

## 使用场景
- 需要用户输入表单域内容时。
- 提供多行输入。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
autoSize | 自适应内容高度 | boolean | false
clear | 可以点击清除图标删除内容 | boolean | false
count | 是否展示字数 | boolean \| ({ count: number, maxLength?: number }) => ReactNode | false
bordered | 是否有边框 | boolean | true
defaultValue | 输入框默认内容 | string | -
disabled | 是否禁用 | boolean | false
maxLength | 最大长度 | number | -
value | 输入框内容 | string | -
onChange | 输入框内容变化时的回调 | function(event: Event) | -
