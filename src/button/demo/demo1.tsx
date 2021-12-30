import Button from '../'
import { Icon } from '../..'
import storeFill from '../../icon/demo/icons/store-fill.svg'

export default () => {
  return (
    <>
      <div>
        <h4>按钮类型</h4>
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="text">文本按钮</Button>
        <Button type="link" href="/asdfs">链接按钮</Button>
        <Button shape="round">圆角按钮</Button>
        <Button shape="circle">圆</Button>
        <Button loading>加载按钮</Button>
        <Button danger>危险按钮</Button>
        <Button disabled>禁用按钮</Button>
        <Button block>block按钮</Button>
        <Button>
          <Icon src={storeFill} />&ensp;
          <span>图标按钮</span>
        </Button>
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
