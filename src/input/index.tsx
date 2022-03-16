import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, ReactNode, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import eyeIcon from './icons/eye.svg'
import closeEyeIcon from './icons/close-eye.svg'
import closeIcon from './icons/close.svg'

export type InputSize = 's' | 'm' | 'l'
export type clearEvent = { currentTarget: { value: string } }
export type InputChangeEventHandler = (event: ChangeEvent<HTMLInputElement> | clearEvent) => void
export type InputClearEventHandler = () => void
export type InputPressEnterEventHandler = (event: KeyboardEvent<HTMLInputElement> | {currentTarget: HTMLInputElement}) => void
type countProps = {
  count: number,
  maxLength?: number
}

export type InputProps = {
  clear?: boolean
  bordered?: boolean
  defaultValue?: string
  disabled?: boolean
  maxLength?: number
  count?: boolean | ((countParams: countProps) => ReactNode)
  prefix?: ReactNode
  size?: InputSize
  suffix?: ReactNode
  type?: string
  value?: string
  visibilityToggle?: boolean
  iconRender?: (visible: boolean) => ReactNode
  onChange?: InputChangeEventHandler
  onClear?: InputClearEventHandler
  onPressEnter?: InputPressEnterEventHandler
} & Omit<React.InputHTMLAttributes<any>, 'prefix' | 'size' | 'onChange'>

const Input = React.forwardRef<unknown, InputProps>((props, ref) => {
  const {
    clear = false,
    bordered = true,
    className = '',
    defaultValue,
    disabled = false,
    maxLength,
    count,
    prefix,
    size = 'm',
    suffix,
    type = 'text',
    value,
    visibilityToggle = true,
    iconRender,
    onChange,
    onClear,
    onFocus,
    onBlur,
    onPressEnter,
    ...rest
  } = props
  const [show, setShow] = useState(false)
  const [val, setVal] = useState(typeof value === 'undefined' ? (defaultValue || '') : value)
  const [isFocus, setIsFocus] = useState(false)
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const wrapper = clear || count || prefix || suffix
  const classes = classNames(
    'cd-input',
    {
      'cd-input-wrapper': wrapper,
      'cd-input-borderless': !bordered,
      'cd-input-focused': isFocus,
      'cd-input-disabled': disabled,
      'cd-input-s': size === 's',
      'cd-input-l': size === 'l',
    },
    className
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.currentTarget.value)
    onChange?.(event)
  }

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = event => {
    setIsFocus(true)
    onFocus?.(event)
  }

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = event => {
    setIsFocus(false)
    onBlur?.(event)
  }

  const handlClear = () => {
    setVal('')
    onChange?.({currentTarget: { value: '' }})
    onClear?.()
  }

  const handlShow = () => {
    setShow(!show)
  }

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
    event.key === 'Enter' && onPressEnter?.(event)
  }

  const countParams: countProps = {
    count: val?.length || 0,
    maxLength
  }

  if (wrapper) {
    return (
      <span className={classes}>
        {
          prefix &&
            <span className="cd-input-prefix">{prefix}</span>
        }
        <input
          ref={currentRef}
          type={type === 'password' && !show ? type : 'text'}
          maxLength={maxLength}
          disabled={disabled}
          value={val}
          {...rest}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
        />
        {
          clear && val !== '' &&
            <Icon src={closeIcon} className="c-input-close-icon" onClick={handlClear} />
        }
        {
          type === 'password' && visibilityToggle && (
            iconRender ?
              <span className="c-input-eye-icon" onClick={handlShow}>{iconRender(show)}</span> :
              <Icon src={show ? eyeIcon : closeEyeIcon} className="c-input-eye-icon" onClick={handlShow} />
          )
        }
        {
          count && (
            typeof count === 'boolean' ?
              <span className="c-input-count">{val?.length}{maxLength ? `/${maxLength}` : ''}</span> : count(countParams)
          )
        }
        {
          suffix &&
            <span className="cd-input-suffix">{suffix}</span>
        }
      </span>
    )
  }

  return (
    <input
      ref={currentRef}
      className={classes}
      type={type}
      maxLength={maxLength}
      disabled={disabled}
      value={val}
      {...rest}
      onChange={handleChange}
    />
  )
})

Input.displayName = 'Input'

export default Input
