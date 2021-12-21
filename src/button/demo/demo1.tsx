import Button from '../'

export default () => {
  return (
    <>
      <div>
        <h4>按钮类型</h4>
        <Button type="primary">主要按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="text">文本按钮</Button>
        <Button type="link">链接按钮</Button>
      </div>
      <div>
        <h4>按钮尺寸</h4>
        <Button size="s">小号按钮</Button>
        <Button>中号按钮</Button>
        <Button size="l">大号按钮</Button>
        <Button size="xl">加大号按钮</Button>
      </div>
    </>
  )
}
