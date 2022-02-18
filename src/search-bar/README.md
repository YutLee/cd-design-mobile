# SearchBar 搜索栏
搜索栏。

## 使用场景
- 页面顶部显示搜索、或其他搜索操作。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
searchIcon | 自定义搜索图标 | ReactNode | -
showSearchIcon | 是否显示搜索图标 | boolean | true
showButton | 是否显示搜索/取消按钮 | boolean | true
searchButton | 自定义搜索按钮 | ReactNode | -
cancelButton | 自定义取消按钮 | ReactNode | -
onSearchClick | 点击搜索图标时的回调 | (event) => void | -
onSearchChange | 搜索框 `change` 事件 | (event) => void | -
onSearch | 点击搜索时的回调 | (value: string) => void | -
onCancel | 点击取消时的回调 | (event) => void | -
Input 组件属性 | 支持 `Input` 组件的其他所有属性 [Input 属性](https://github.com/YutLee/cd-design-mobile/blob/main/src/input/README.md) | - | -
