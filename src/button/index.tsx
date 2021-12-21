import classNames from 'classnames'
import { BaseProps, ComponentSizeType, AnchorTargetType } from '../utils/type'
import '../index.css'
import './index.css'

export type ButtonProps = BaseProps & {
  block?: boolean
  children?: React.ReactNode
  className?: string
  danger?: boolean
  disabled?: boolean
  hollow?: boolean
  href?: string
  htmlType?: 'submit' | 'reset' | 'button'
  loading?: boolean
  shape?: 'default' | 'circle' | 'round'
  size?: ComponentSizeType,
  target?: AnchorTargetType
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  onClick?: React.MouseEventHandler<HTMLElement>
} & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

function Button(props: ButtonProps) {
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

  const classes = classNames(
    'oc-button',
    {
      [`oc-button-${type}`]: type !== 'default',
      'oc-button-block': block,
      'oc-button-loading': loading,
      'oc-button-danger': danger,
      'oc-button-circle': shape === 'circle',
      'oc-button-round': shape === 'round',
      'oc-button-disabled': disabled,
      'oc-button-s': size === 's',
      'oc-button-l': size === 'l',
      'oc-button-xl': size === 'xl'
    },
    className
  )

  return (
    <button
      className={classes}
      disabled={disabled}
      type={htmlType}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
