import { useState } from 'react'
import Coupon, { CouponStatusType } from '..'
import './demo1.css'

export default () => {
  const [status, setStatus] = useState<CouponStatusType>('default')
  const handleReceive = () => {
    setStatus('received')
  }

  const handleUse = () => {
    alert('点击了去使用')
  }

  return (
    <>
      <div>
        <h4>普通展示</h4>
        <Coupon
          title="店铺券"
          price={180}
          condition="满1000减180"
          date="2021.05.20-2022.12.18"
          info="全部商品可用"
          status={status}
          onReceive={handleReceive}
        />
        <Coupon
          title="专用券"
          price={180}
          condition="满1000减180"
          date="2021.05.20-2022.12.18"
          info="全部商品可用"
          status="received"
          onUse={handleUse}
          onReceive={handleReceive}
        />
        <Coupon
          title="店铺券"
          price={180}
          condition="满1000减180"
          date="2021.05.20-2022.12.18"
          info="全部商品可用"
          disabled
        />
        <div className="readonly">
          <Coupon
            title="广东顺德运营中心店铺券"
            price={180}
            condition="满1000减180"
            date="2021.05.20-2022.12.18"
            status="expired"
            readonly
          />
          <Coupon
            title="广东顺德运营中心店铺券"
            price={180}
            condition="满1000减180"
            date="2021.05.20-2022.12.18"
            status="used"
            readonly
          />
          <Coupon
            title="广东顺德运营中心店铺券"
            price={180}
            condition="满1000减180"
            date="2021.05.20-2022.12.18"
            status="terminated"
            readonly
          />
        </div>
      </div>
    </>
  )
}
