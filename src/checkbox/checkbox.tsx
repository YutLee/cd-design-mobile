import React, { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import circleIcon from './icons/circle.svg'
import checkedIcon from './icons/checked.svg'
import invalidIcon from './icons/invalid.svg'
import { useMount } from 'cd-hooks'

export type CheckboxOptions = {
  checked?: boolean
  value?: string | number | undefined
  disabled?: boolean
  invalid?: boolean
}
export interface CheckBoxOptionsProps extends  CheckboxOptions {
  values?: CheckboxOptions[]
}
export type CheckboxChangeEventHandler = (options: CheckBoxOptionsProps, event: React.MouseEvent<HTMLElement, MouseEvent>) => void
export type ChangeEventHandler = (checked: boolean) => void
export type CheckboxExpandProps = {
  checked?: boolean
  disabled?: boolean
  value?: string | number | undefined
  change?: ChangeEventHandler
}
export type CheckboxInputProps = HTMLElement & CheckboxExpandProps | CheckboxExpandProps

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  invalid?: boolean
  label?: ReactNode
  name?: string
  value?: string | number
  onChange?: CheckboxChangeEventHandler
}

const InternalCheckbox = React.forwardRef<unknown, CheckboxProps>((props, ref) => {
  const {
    checked = false,
    className = '',
    disabled = false,
    invalid = false,
    name,
    label,
    value,
    onChange,
    ...rest
  } = props
  const [disable, setDisable] = useState(disabled)
  const [inv, setInv] = useState(invalid)
  const [check, setCheck] = useState(checked)
  const [val, setVal] = useState(value)
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-checkbox',
    {
      'cd-checkbox-checked': check,
      'cd-checkbox-disabled': disable,
    },
    className
  )
  const iconSrc = inv ? invalidIcon : check ? checkedIcon : circleIcon

  const checkedAll = (check: boolean, event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const allCheckbox = document.getElementsByName(`cd-checkbox-all-${name}`)
    const checkboxList = document.getElementsByName(name || '')
    const allSize = allCheckbox.length
    let size = 0, enableSize = 0
    let child: CheckboxInputProps
    let all: CheckboxInputProps
    const values = []

    for(let i = 0; i < checkboxList.length; i++) {
      child = checkboxList[i]
      values.push({
        checked: child.getAttribute('data-checked') === 'true',
        value: child.value,
        disabled: child.disabled,
        invalid: child.getAttribute('data-invalid') === 'true'
      })

      if (!child.disabled && child.getAttribute('data-invalid') !== 'true') {
        enableSize++
        child.getAttribute('data-checked') === 'true' && size++
      }
    }

    if (allCheckbox && checkboxList && enableSize > 0) {
      for(let j = 0; j < allSize; j++) {
        all = allCheckbox[j]
        all.change?.(enableSize === size)
      }
    }

    onChange?.({checked: !check, value: val, disabled: disable, invalid: inv, values}, event)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (inv || disable) return

    currentRef.current.setAttribute('data-checked', !check)
    setCheck(!check)
    checkedAll(check, event)
  }

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  useEffect(() => {
    setDisable(disabled)
  }, [disabled])

  useEffect(() => {
    setInv(invalid)
  }, [invalid])

  useEffect(() => {
    setVal(value)
  }, [value])

  useMount(() => {
    currentRef.current.change = (checked: boolean) => {
      setCheck(checked)
    }
  })

  return (
    <button
      type="button"
      ref={currentRef}
      className={classes}
      disabled={disable}
      name={name}
      value={val}
      data-checked={check}
      data-invalid={inv}
      {...rest}
      onClick={handleClick}
    >
      <Icon src={iconSrc} fill={disabled ? '#ebebeb' : check ? '#fabe00' : '#e0e0e0'} />
      {
        label && <label className="cd-checkbox-label">{label}</label>
      }
    </button>
  )
})

InternalCheckbox.displayName = 'Checkbox'

export default InternalCheckbox
