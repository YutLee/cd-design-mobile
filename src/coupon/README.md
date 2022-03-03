# Coupon 优惠券
优惠券信息。

## 使用场景
- 用于显示优惠券信息。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
price | 优惠券面值 | number | -
title | 优惠券标题 | ReactNode | -
condition | 优惠券条件 | ReactNode | -
info | 优惠券简介 | ReactNode | -
date | 优惠券日期 | ReactNode | -
className | 类名 | string | -
status | 优惠券状态 | CouponStatusType : `default` \| `received` \| `expired` \| `used` \| `terminated` | `default`
disabled | 是否禁用 | boolean | false
readonly | 是否只读 | boolean | false
onReceive | 点击“领取”时回调 | () => void | -
onUse | 点击“去使用”时回调 | () => void | -
