import React, { ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type AnchorTargetType = '_self' | '_blank' | '_parent' | '_top'
export type ButtonSizeType = 's' | 'm' | 'l' | 'xl'

export type ButtonProps = {
  block?: boolean
  children?: ReactNode
  className?: string
  danger?: boolean
  disabled?: boolean
  hollow?: boolean
  href?: string
  htmlType?: 'submit' | 'reset' | 'button'
  loading?: boolean
  shape?: 'default' | 'circle' | 'round'
  size?: ButtonSizeType,
  target?: AnchorTargetType
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  onClick?: React.MouseEventHandler<HTMLElement>
} & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

const Button = React.forwardRef<unknown, ButtonProps>((props, ref) => {
  const {
    block = false,
    children,
    className = '',
    danger = false,
    disabled = false,
    hollow = false,
    href,
    htmlType,
    loading = false,
    shape = 'default',
    size = 'm',
    target,
    type = 'default',
    ...rest
  } = props
  const buttonRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-button',
    {
      [`cd-button-${type}`]: type !== 'default',
      'cd-button-block': block,
      'cd-button-loading': loading,
      'cd-button-danger': danger,
      'cd-button-circle': shape === 'circle',
      'cd-button-round': shape === 'round',
      'cd-button-disabled': disabled,
      'cd-button-s': size === 's',
      'cd-button-l': size === 'l',
      'cd-button-xl': size === 'xl'
    },
    className
  )

  if (type === 'link') {
    return <a
      className={classes}
      href={href}
      {...rest}
    >
      {children}
    </a>
  }

  return (
    <button
      ref={buttonRef}
      className={classes}
      disabled={disabled}
      type={htmlType}
      {...rest}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
