# ActionSheet 上拉菜单
上拉菜单。

## 使用场景
- 上拉菜单，用于较少选项的菜单选择。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
title | 标题 | ReactNode | -
dataSource | 菜单列表数据源 | any[] | -
cancelText | 取消按钮文字 | string | `取消`
onItemClick | 菜单选项点击回调，参数为关闭函数 | function(close) | -
onCancel | 确定回调，参数为关闭函数 | function(close) | -
