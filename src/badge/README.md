# Badge 徽标
图标右上角的圆形徽标(数字)。

## 使用场景
- 一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
count | 展示的数字，大于 max 时显示为 ${max}+，为 0 时隐藏 | ReactNode | -
dot | 不展示数字，只有一个小红点 | boolean | false
offset | 设置状态点的位置偏移 | [number, number] | -
max | 展示最大数值 | number | 99
showZero | 当数值为 0 时，是否展示 Badge | boolean | false
title | 设置鼠标放在状态点上时显示的文字 | string | -
