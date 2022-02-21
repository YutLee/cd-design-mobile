import { MouseEventHandler } from 'react'
import Tag from '..'
import { Icon } from '../..'
import storeSVG from '../../icon/demo/icons/store.svg'
import './demo1.css'

export default () => {
  const handleClose: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault()
    alert('阻止默认行为')
  }

  return (
    <>
      <div>
        <h4>普通标签</h4>
        <Tag>标签</Tag>&ensp;
        <Tag icon={<Icon src={storeSVG} />}>标签</Tag>&ensp;
        <Tag closable onClose={handleClose}>可关闭标签</Tag>&ensp;
        <Tag shape="round">可关闭标签</Tag>&ensp;
        <Tag shape="circle">货</Tag>&ensp;
        <h4>小号标签</h4>
        <Tag size="s">小号标签</Tag>&ensp;
        <Tag size="s" icon={<Icon src={storeSVG} />}>小号标签</Tag>&ensp;
        <Tag size="s" closable>小号可关闭标签</Tag>&ensp;
        <Tag size="s" shape="round">小号可关闭标签</Tag>&ensp;
        <Tag size="s" shape="circle">货</Tag>&ensp;
        <h4>优惠券标签</h4>
        <Tag type="coupon" className="coupon">优惠券</Tag>&ensp;
      </div>
    </>
  )
}
