# Image 图片
图片。

## 使用场景
- 需要展示图片时使用。

## API
属性 | 说明 | 类型 | 默认值
---|---|---|---
src | 图片地址 | string | -
alt | 图像描述 | string | -
[loading](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-loading) | 指示浏览器应当如何加载该图像。 | `eager` \| `lazy` eager：立即加载图像，不管它是否在可视视口（visible viewport）之外（默认值）。lazy：延迟加载图像，直到它和视口接近到一个计算得到的距离，由浏览器定义。 | `lazy`
fallback | 加载失败容错地址 | string | -
onError | 加载错误回调 | (event: Event) => void | -
原生 img 属性 | 支持原生 img 的其他所有属性 [img 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) | - | -
