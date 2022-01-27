# Dialog 对话框
对话框。

## 使用场景
- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
title | 标题 | ReactNode | -
content | 内容 | ReactNode | -
contentAlign | 内容对齐方式 | `left` | `center` | `right` | `center`
okText | 确认按钮文字 | string | `确定`
cancelText | 取消按钮文字 | string | `取消`
onOk | 取消回调，参数为关闭函数 | function(close) | -
onCancel | 确定回调，参数为关闭函数 | function(close) | -
