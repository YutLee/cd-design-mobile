# Dropdown 下拉菜单
向下弹出的列表。

## 使用场景
当页面上的操作命令过多时，用此组件可以收纳操作元素。点击会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
- 用于收罗一组命令操作。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
arrow | 下拉菜单箭头 | ReactNode | -
className | 下拉菜单类名 | string | -
disabled | 是否禁用 | boolean | false
footer | 下拉面板的页脚 | ReactNode | -
footerClassName | 下拉面板的页脚类名 | string | -
value | 拉菜单当前值 | string | number | -
onChange | 下拉菜单值变化的回调 | function(option: any) | -

### Dropdown.Option
属性 | 说明 | 类型 | 默认值
---|---|---|---
className | 类名 | string | -
children | 选项内容 | ReactNode | -
disabled | 是否禁用 | boolean | false
icon | 选项选中图标 | ReactNode | -
selected | 是否当前选中选项 | boolean | false
showIcon | 是否显示选项选中图标 | boolean | true
value | 选项值 | string | number | -
onClick | 选项点击的回调 | function(event) | -
