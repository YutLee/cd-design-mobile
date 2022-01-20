import { Link, useNavigate } from 'react-router-dom'
import Empty from '..'
import { Button, Icon } from '../..'
import storeFillSVG from '../../icon/demo/icons/store-fill.svg'

export default () => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Empty image="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/HTML/Element/img/favicon144.png" description="空状态" />
        <h4>无描述</h4>
        <Empty image="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/HTML/Element/img/favicon144.png" />
        <h4>使用图标</h4>
        <Empty image={<Icon style={{width: '100px', height: '100px'}} src={storeFillSVG} />}description="页面出错了" />
        <h4>自定义</h4>
        <Empty
          image="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/HTML/Element/img/favicon144.png"
          description={<div>出错了<Link to="/">出错原因</Link>，请返回首页</div>}
        >
          <Button onClick={() => navigate('/')}>返回首页</Button>
        </Empty>
      </div>
    </>
  )
}
