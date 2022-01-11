import Divider from '..'

export default () => {
  return (
    <>
      <div>
        <h4>分割线</h4>
        <Divider />
        <Divider dashed />
        <Divider>分割线</Divider>
        <Divider dashed align="left">虚线左边显示</Divider>
        <Divider align="right">右边显示</Divider>
        <div>
          首页
          <Divider type="vertical" />
          购物车
          <Divider type="vertical" />
          订单
        </div>
      </div>
    </>
  )
}
