# Toolbar 工具栏
页面顶部工具栏。

## 使用场景
- 页面顶部显示标题、返回按钮、更多操作。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
backIcon | 返回图标 | ReactNode | -
showBackIcon | 是否显示返回图标 | boolean | true
title | 标题 | ReactNode | -
bordered | 是否有下边框 | boolean | true
suffix | 后缀图标 | ReactNode | -
showSearchIcon | 后缀是否显示为搜索图标 | boolean | false
placeholder | 后缀是否显示为搜索图标 | boolean | false
extra | 右上角的操作区域 | ReactNode | -
onSuffixClick | 后缀点击时回调 | function | -
onBack | 点击返回时的回调（可通过 event.preventDefault() 来阻止默认行为） | (event) => void | -
onSearchClick | 点击搜索图标时的回调 | (event) => void | -
