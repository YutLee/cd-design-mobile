import React, { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import InternalCheckbox, { CheckboxChangeEventHandler, CheckboxInputProps, CheckboxOptions } from './checkbox'
import './index.css'
import '../index.css'

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

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  return (
    <InternalCheckbox
      ref={currentRef}
      className={classes}
      name={`cd-checkbox-all-${name}`}
      label={label}
      {...rest}
      onChange={handleChange}
    />
  )
})

export default CheckboxAll
