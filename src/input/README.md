# Input 输入框
通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 使用场景

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
clear | 可以点击清除图标删除内容 | boolean | false
count | 是否展示字数 | boolean \| ({ count: number, maxLength?: number }) => ReactNode | false
bordered | 是否有边框 | boolean | true
defaultValue | 输入框默认内容 | string | -
disabled | 是否禁用 | boolean | false
maxLength | 最大长度 | number | -
prefix | 带有前缀图标的 input | ReactNode | -
size | 大小 | `s` \| `m` \| `l` | `m`
suffix | 带有后缀图标的 input | ReactNode | -
type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7) | string | text
value | 输入框内容 | string | -
iconRender | 自定义切换按钮，type="password"有效  | (visible: boolean) => ReactNode | -
visibilityToggle | 是否显示切换按钮，type="password"有效 | boolean | true
onChange | 输入框内容变化时的回调 | function(event: Event) | -
onPressEnter | 按下回车的回调 | function(event: Event) | -
