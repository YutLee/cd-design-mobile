import Card from '..'
import { Button, Icon } from '../..'
import storeFillSVG from '../../icon/demo/icons/store-fill.svg'

export default () => {
  return (
    <>
      <div style={{backgroundColor: '#f5f5f5', padding: '10px'}}>
        <h4>简单展示</h4>
        <Card margin padding>这是卡片内容</Card>
        <h4>直角角展示</h4>
        <Card radius={false} margin padding>
          <Icon src={storeFillSVG} />
          <br />
          这是卡片内容
          <br />
          <br />
          <Button type="primary">这是一个按钮</Button>
        </Card>
      </div>
    </>
  )
}
