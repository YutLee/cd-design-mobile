import React, { ReactNode, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type SwitchSize = 's' | 'm' | 'l'
export type SwitchChangeEventHandler = (checked: boolean, event: React.MouseEvent<HTMLElement, MouseEvent>) => void
export type SwitchClickEventHandler = SwitchChangeEventHandler

export type SwitchProps = {
  checked?: boolean
  checkedChildren?: ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  size?: SwitchSize
  unCheckedChildren?: ReactNode
  onChange?: SwitchChangeEventHandler
  onClick?: SwitchClickEventHandler
}

const Switch = React.forwardRef<unknown, SwitchProps>((props, ref) => {
  const {
    checked = false,
    checkedChildren,
    className = '',
    disabled = false,
    loading = false,
    size = 'm',
    unCheckedChildren,
    onChange,
    onClick,
    ...rest
  } = props
  const [check, setCheck] = useState(checked)
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-switch',
    `cd-switch-${size}`,
    {
      'cd-switch-checked': check,
      'cd-switch-disabled': disabled,
      'cd-switch-loading': loading
    },
    className
  )

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onClick?.(checked, event)
    onChange?.(!checked, event)
    setCheck(prevState => !prevState)
  }

  return (
    <button
      ref={currentRef}
      className={classes}
      disabled={disabled}
      {...rest}
      onClick={handleClick}
    >
      <div className="cd-switch-handler"></div>
      {
        checkedChildren && unCheckedChildren &&
          <span className="cd-switch-inner">{check ? checkedChildren : unCheckedChildren}</span>
      }
    </button>
  )
})

Switch.displayName = 'Switch'

export default Switch
