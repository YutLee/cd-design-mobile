import List from '..'
import { Icon } from '../..'
import searchSVG from '../../icon/demo/icons/search.svg'

export default () => {
  const handleArrowClick = () => {
    alert('点击了箭头')
  }

  const handleItemClick = () => {
    alert('点击了列表元素')
  }

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <div>
          <List>
            <List.Item label="开户银行" showArrow  onArrowClick={handleArrowClick}>已签收 02-15 09:34</List.Item>
            <List.Item label="银行账号" onItemClick={handleItemClick}>运输中 02-15 08:09</List.Item>
            <List.Item label="注册地址">广东佛山市顺德区龙江镇坦东大坝工业区纵购商城D3栋</List.Item>
            <List.Item label="注册电话">已下单 02-14 09:34</List.Item>
          </List>
        </div>
        <h4>带边框</h4>
        <div>
          <List bordered>
            <List.Item bottomBordered label="开户银行" showArrow>已签收 02-15 09:34</List.Item>
            <List.Item bottomBordered label="银行账号">运输中 02-15 08:09</List.Item>
            <List.Item bottomBordered label="注册地址">广东佛山市顺德区龙江镇坦东大坝工业区纵购商城D3栋</List.Item>
            <List.Item label="注册电话">已下单 02-14 09:34</List.Item>
          </List>
        </div>
        <h4>自定义Arrow</h4>
        <div>
          <List>
            <List.Item label="开户银行" showArrow>已签收 02-15 09:34</List.Item>
            <List.Item label="银行账号" showArrow arrow={<Icon src={searchSVG} />}>运输中 02-15 08:09</List.Item>
            <List.Item label="注册地址">广东佛山市顺德区龙江镇坦东大坝工业区纵购商城D3栋</List.Item>
            <List.Item label="注册电话">已下单 02-14 09:34</List.Item>
          </List>
        </div>
        <h4>自定义Item.padding</h4>
        <div>
          <List>
            <List.Item padding='s' label="开户银行" showArrow>已签收 02-15 09:34</List.Item>
            <List.Item padding='s' label="银行账号" showArrow arrow={<Icon src={searchSVG} />}>运输中 02-15 08:09</List.Item>
            <List.Item padding='s' label="注册地址">广东佛山市顺德区龙江镇坦东大坝工业区纵购商城D3栋</List.Item>
            <List.Item padding='s' label="注册电话">已下单 02-14 09:34</List.Item>
          </List>
        </div>
      </div>
    </>
  )
}
