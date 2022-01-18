import Input from '..'
import { Icon } from '../..'
import storeIcon from '../../icon/demo/icons/store.svg'
import storeFillIcon from '../../icon/demo/icons/store-fill.svg'

export default () => {
  return (
    <>
      <div>
        <h4>开关尺寸</h4>
        <Input defaultValue="小" size="s" />
        <Input defaultValue="默认" />
        <Input defaultValue="大" size="l" />
        <h4>无边框</h4>
        <Input defaultValue="无边框" bordered={false} />
        <Input prefix={<Icon src={storeIcon} />} defaultValue="无边框" bordered={false} />
        <h4>禁用</h4>
        <Input disabled defaultValue="禁用" />
        <h4>只读</h4>
        <Input readOnly defaultValue="只读" />
        <h4>默认值</h4>
        <Input defaultValue="默认值" />
        <h4>placeholder</h4>
        <Input placeholder="请输入" />
        <h4>clear</h4>
        <Input placeholder="请输入" clear value="clear" />
        <h4>prefix & suffix</h4>
        <Input prefix="https://" suffix=".com" defaultValue="mysite" />
        <h4>计数</h4>
        <Input placeholder="请输入" clear value="clear" count={true} />
        <Input placeholder="请输入" clear value="clear" count={true} maxLength={20} />
        <Input placeholder="请输入" value="clear" maxLength={100} count={({count, maxLength}) => <span>这里是计数:{count}/{maxLength}</span>} />
        <h4>密码</h4>
        <Input type="password" placeholder="请输入密码" clear />
        <Input type="password" placeholder="请输入密码" clear visibilityToggle={false} />
        <Input type="password" placeholder="请输入密码" clear iconRender={(visibile) => visibile ? <Icon src={storeIcon} /> : <Icon src={storeFillIcon} />} />
      </div>
    </>
  )
}
