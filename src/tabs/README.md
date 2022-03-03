# Tabs 标签页
选项卡切换组件。

## 使用场景
提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## API
### Tabs
属性 | 说明 | 类型 | 默认值
---|---|---|---
active | 当前激活 tab 面板的 key | string | -
init | 初始化选中面板的 key，如果没有设置 active | string | -
centered | 标签居中展示 | boolean | false
onChange | 切换面板的回调 | function(active, idx) {} | -

### Tabs.Panel
属性 | 说明 | 类型 | 默认值
---|---|---|---
key | 对应 active | string | -
tab | 选项卡头显示文字 | ReactNode | -
