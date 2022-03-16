import React, { ChangeEventHandler, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Col, Icon, Row } from '..'
import minusIcon from './icons/minus.svg'
import plusIcon from './icons/plus.svg'

export type NumberInputChangeEventHandler = (value: number) => void
export type NumberInputStepEventHandler = (value: number, step: number, type: 'up' | 'down') => void

export type InputProps = {
  className?: string
  max?: number
  min?: number
  defaultValue?: number
  disabled?: boolean
  shape?: 'round' | 'circle'
  size?: 'm' | 'l'
  step?: number
  value?: number
  editable?: boolean
  onChange?: NumberInputChangeEventHandler
  onStep?: NumberInputStepEventHandler
}

const Input = React.forwardRef<unknown, InputProps>((props, ref) => {
  const {
    className,
    max = 999999,
    min = 0,
    defaultValue = 0,
    value,
    disabled = false,
    shape = 'round',
    size = 'm',
    step = 1,
    editable = true,
    onChange,
    onStep,
    ...rest
  } = props
  const init = typeof value === 'undefined' ? defaultValue : value
  const [val, setVal] = useState<number | string>(init > max ? max : init < min ? min : init)
  const currentValueRef = useRef<string | number>(val)
  const [isFocus, setIsFocus] = useState(false)
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-number-input-wrapper',
    {
      'cd-number-input-circle': shape === 'circle',
      'cd-number-input-disabled': disabled,
      'cd-number-input-l': size === 'l',
      'cd-number-input-s-font': isFocus ? currentValueRef.current.toString().length > 4 : val.toString().length > 4
    },
    className
  )

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = parseInt(event.currentTarget.value || '')
    const current = (value > max ? max : value < min ? min : value).toString()
    setIsFocus(false)
    setVal(current)
    currentValueRef.current = current
    onChange?.(parseInt(current))
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (!/([0-9]|Backspace)/.test(event.key)) {
      event.preventDefault()
    }
  }

  const handleFocus = () => {
    setVal('')
    setIsFocus(true)
  }

  const handleBlur = () => {
    setVal(currentValueRef.current)
    setIsFocus(false)
  }

  const handleStepClick = (type: 'up' | 'down') => {
    if (disabled) return

    const value = type === 'up' ? Number(currentValueRef.current) + step : Number(currentValueRef.current) - step
    const current = (value > max ? max : value < min ? min : value).toString()
    setIsFocus(false)
    setVal(current)
    currentValueRef.current = current
    onStep?.(value, step, type)
  }

  useEffect(() => {
    let current
    if (typeof value === 'undefined' && (typeof defaultValue === 'string' || typeof defaultValue === 'number')) {
      current = defaultValue > max ? max : defaultValue < min ? min : defaultValue
      setVal(current)
      currentValueRef.current = current
    } else if (typeof value === 'string' || typeof value === 'number') {
      current = value > max ? max : value < min ? min : value
      setVal(current)
      currentValueRef.current = current
    }
  }, [value, defaultValue])

  return (
    <Row
      className={classes}
      ref={currentRef}
    >
      <Col
        className={classNames('cd-number-input-minus', {'cd-number-input-minus-disabled': disabled || (val !== '' && val <= min)})}
        onClick={handleStepClick.bind(this, 'down')}
      >
        <Icon src={minusIcon} size="s" color="inherit" />
      </Col>
      <Col flex={1} className="cd-number-input">
        <input
          disabled={disabled}
          type="number"
          value={val}
          className={classNames('cd-number-input-inner', {'cd-number-input-caret': isFocus})}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {
          isFocus &&
            <span className="cd-number-input-double">{currentValueRef.current}</span>
        }
      </Col>
      <Col
        className={classNames('cd-number-input-plus', {'cd-number-input-plus-disabled': disabled || val >= max})}
        onClick={handleStepClick.bind(this, 'up')}
      >
        <Icon src={plusIcon} size="s" color="inherit" />
      </Col>
    </Row>
  )
})

Input.displayName = 'Input'

export default Input
