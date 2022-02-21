import { createRef, forwardRef, MouseEvent, MouseEventHandler, ReactNode, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import closeSVG from './icons/close.svg'

export type TextareaProps = {
  children?: ReactNode
  className?: string
  closable?: boolean
  closeIcon?: ReactNode
  icon?: ReactNode
  shape?: 'default' | 'circle' | 'round'
  size?: 's' | 'm'
  type?: 'default' | 'coupon'
  visible?: boolean
  onClose?: MouseEventHandler<HTMLSpanElement>
}

const Tag = forwardRef<unknown, TextareaProps>((props, ref) => {
  const {
    children,
    className,
    closable = false,
    closeIcon,
    icon,
    shape = 'default',
    size = 'm',
    type = 'default',
    visible = true,
    onClose,
    ...rest
  } = props
  const [hide, setHide] = useState(!visible)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-tag',
    {
      'cd-tag-s': size === 's',
      'cd-tag-circle': shape === 'circle',
      'cd-tag-round': shape === 'round',
      'cd-tag-coupon': type === 'coupon',
      'cd-tag-hidden': hide,
    },
    className
  )

  const handleClose: MouseEventHandler<HTMLSpanElement> = (event) => {
    onClose?.(event)
    !event.isDefaultPrevented() && setHide(true)
  }

  return (
    <span
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {icon && <span className="cd-tag-icon">{icon}</span>}
      {children}
      {
        closable &&
          <span onClick={handleClose}>
            {
              closeIcon !== undefined ?
                closeIcon :
                <Icon src={closeSVG} className="cd-tag-close-icon" />
            }
          </span>
      }
    </span>
  )
})

export default Tag
