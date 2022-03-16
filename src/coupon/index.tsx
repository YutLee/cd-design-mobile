import { createRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'
import { Button, Icon } from '..'
import './index.css'
import '../index.css'
import bigStoreFillSVG from './icons/big-store-fill.svg'
import couponReceivedSVG from './icons/coupon-received.svg'
import couponUsedSVG from './icons/coupon-used.svg'
import couponExpiredSVG from './icons/coupon-expired.svg'
import couponTerminatedSVG from './icons/coupon-terminated.svg'

export type CouponStatusType = 'default' | 'received' | 'expired' | 'used' | 'terminated'
export type CouponProps = {
  price: number
  title: ReactNode
  condition: ReactNode
  info?: ReactNode
  date: ReactNode
  className?: string
  disabled?: boolean
  readonly?: boolean
  status?: CouponStatusType
  onReceive?: () => void
  onUse?: () => void
}

const Coupon = forwardRef<unknown, CouponProps>((props, ref) => {
  const {
    className,
    price = 0,
    title,
    condition,
    info,
    date,
    disabled = false,
    readonly = false,
    status = 'default',
    onReceive,
    onUse,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-coupon',
    {
      'cd-coupon-readonly': readonly,
      'cd-coupon-disabled': disabled
    },
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      <i className="cd-coupon-shadow-a" />
      <i className="cd-coupon-shadow-b" />
    {
      readonly ?
        <div className="cd-coupon-desc">
          <div className="cd-coupon-store">
            <Icon src={bigStoreFillSVG} />
            <div className="cd-coupon-title">{title}</div>
          </div>
          <div className="cd-coupon-date">{date}</div>
        </div> :
        <div className="cd-coupon-desc">
          {
            status === 'received' && <Icon className="cd-coupon-seal" src={couponReceivedSVG} />
          }
          <div className="cd-coupon-title">
            {title}
            {
              status === 'received' &&
                <Button shape="round" type="primary" onClick={onUse}>去使用</Button>
            }
          </div>
          <div className="cd-coupon-info">{info}</div>
          <div className="cd-coupon-date">{date}</div>
        </div>
      }
      <div>
        <i className="cd-coupon-top-right-corner" />
        <i className="cd-coupon-right-corner" />
        <i className="cd-coupon-bottom-right-corner" />
      </div>
      <div>
        <i className="cd-coupon-top-left-corner" />
        <i className="cd-coupon-left-corner" />
        <i className="cd-coupon-bottom-left-corner" />
      </div>
      <div className="cd-coupon-face-value">
        {
          status === 'expired' ?
            <Icon className="cd-coupon-seal" src={couponExpiredSVG} /> :
            status === 'used' ?
            <Icon className="cd-coupon-seal" src={couponUsedSVG} /> :
              status === 'terminated' ?
              <Icon className="cd-coupon-seal" src={couponTerminatedSVG} /> : null
        }
        <div className="cd-coupon-price"><span className="cd-coupon-yen">&yen;</span>{price}</div>
        <div className="cd-coupon-condition">{condition}</div>
        {
          !readonly && (
            disabled ?
              <Button disabled={disabled} shape="round" onClick={onReceive}>已抢光了</Button> :
              <Button disabled={disabled} shape="round" onClick={onReceive}>{status === 'received' ? '继续领取' : '点击领取'}</Button>
          )
        }
      </div>
    </div>
  )
})

Coupon.displayName = 'Coupon'

export default Coupon
