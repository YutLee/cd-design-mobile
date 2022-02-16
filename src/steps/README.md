# Steps 步骤条
引导用户按照流程完成任务的导航条。

## 使用场景
- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
className | 类名 | string | -
current | 指定当前步骤，从 0 开始记数。 | number | 0
initial | 起始序号，从 0 开始记数 | number | 0

### Step
属性 | 说明 | 类型 | 默认值
---|---|---|---
className | 类名 | string | -
title | 标题 | ReactNode | -
status | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。`wait` \| `process` \| `finish` \| `error` | string | `wait`
