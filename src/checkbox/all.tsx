import React, { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import InternalCheckbox, { CheckboxChangeEventHandler, CheckboxInputProps, CheckboxOptions } from './checkbox'
import './index.css'
import '../index.css'
import { useMount } from 'cd-hooks'

export type ValuesProps = {
  checked: boolean
  value?: string | number
}

export type CheckboxAllProps = {
  checked?: boolean
  label?: ReactNode
  className?: string
  disabled?: boolean
  invalid?: boolean
  name: string
  values?: ValuesProps
  onChange?: CheckboxChangeEventHandler
}

const CheckboxAll = React.forwardRef<unknown, CheckboxAllProps>((props, ref) => {
  const {
    checked = false,
    label,
    className = '',
    disabled = false,
    invalid = false,
    name,
    values,
    onChange,
    ...rest
  } = props

  const [disable, setDisable] = useState(disabled)
  const [inv, setInv] = useState(invalid)
  const [check, setCheck] = useState(checked)
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-checkbox-all',
    {
      'cd-checkbox-all-checked': check,
      'cd-checkbox-all-disabled': disabled,
    },
    className
  )

  const handleChange = (options: CheckboxOptions, event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const checkboxList = document.getElementsByName(name)
    const newValues = []
    let child: CheckboxInputProps

    for(let i = 0; i < checkboxList.length; i++) {
      child = checkboxList[i]
      if (!child.disabled && child.getAttribute('data-invalid') !== 'true' && options.checked !== undefined) {
        child.change?.(options.checked)
      }
      newValues.push({
        checked: options.checked,
        value: child.value,
        disabled: child.disabled,
        invalid: child.getAttribute('data-invalid') === 'true'
      })
    }

    if (options.checked !== undefined) {
      onChange?.({checked: options.checked, disabled: disabled, invalid, values: newValues}, event)
    }
  }

  const allChange = () => {
    const checkboxList = document.getElementsByName(name)
    let child: CheckboxInputProps
    let enable, disabled

    for(let i = 0; i < checkboxList.length; i++) {
      child = checkboxList[i]
      if (!(child.disabled || child.getAttribute('data-invalid') === 'true')) {
        enable = true
        break
      }
    }

    for(let i = 0; i < checkboxList.length; i++) {
      child = checkboxList[i]
      if (child.disabled) {
        disabled = true
        break
      }
    }

    if (!enable) {
      if (disabled) {
        setDisable(true)
      } else {
        setInv(true)
      }
    }
  }

  useEffect(() => {
    allChange()
    setCheck(checked)
  }, [checked])

  useEffect(() => {
    allChange()
    setDisable(disabled)
  }, [disabled])

  useEffect(() => {
    setInv(invalid)
  }, [invalid])

  useMount(allChange)

  return (
    <InternalCheckbox
      ref={currentRef}
      className={classes}
      name={`cd-checkbox-all-${name}`}
      label={label}
      disabled={disable}
      invalid={inv}
      {...rest}
      onChange={handleChange}
    />
  )
})

export default CheckboxAll
