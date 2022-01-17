import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import circleIcon from './icons/circle.svg'
import checkedIcon from './icons/checked.svg'

export type RadioOptions = {
  checked?: boolean
  value?: string | number | undefined
  disabled?: boolean
}

export type RadioChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => void

export type RadioProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: ReactNode
  name?: string
  value?: string | number
  onChange?: RadioChangeEventHandler
}

const Radio = React.forwardRef<unknown, RadioProps>((props, ref) => {
  const {
    checked = false,
    className = '',
    disabled = false,
    name,
    label,
    value,
    onChange,
    ...rest
  } = props
  const [disable, setDisable] = useState(disabled)
  const [check, setCheck] = useState(checked)
  const [val, setVal] = useState(value)
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-radio',
    {
      'cd-radio-checked': check,
      'cd-radio-disabled': disable,
    },
    className
  )
  const iconSrc = check ? checkedIcon : circleIcon

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disable) return

    onChange?.(event)
  }

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  useEffect(() => {
    setDisable(disabled)
  }, [disabled])

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <label
      ref={currentRef}
      className={classes}
      {...rest}
      >
      <input
        type="radio"
        checked={check}
        disabled={disable}
        name={name}
        value={val}
        style={{display: 'none'}}
        onChange={handleChange}
      />
      <Icon src={iconSrc} fill={disabled ? '#ebebeb' : check ? '#fabe00' : '#e0e0e0'} />
      {
        label && <span className="cd-radio-label">{label}</span>
      }
    </label>
  )
})

export default Radio
