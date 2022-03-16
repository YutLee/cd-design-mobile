import React, { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import starFillIcon from './icons/star-fill.svg'

export type RateChangeEventHandler = (value: number) => void
export type RateProps = {
  allowClear?: boolean
  allowHalf?: boolean
  className?: ReactNode
  count?: number
  defaultValue?: number
  disabled?: boolean
  icon?: ReactNode
  value?: number
  onChange?: RateChangeEventHandler
}

const Rate = React.forwardRef<unknown, RateProps>((props, ref) => {
  const {
    allowClear = true,
    allowHalf = false,
    className,
    count = 5,
    defaultValue = 0,
    disabled,
    icon,
    value,
    onChange,
    ...rest
  } = props
  const [disable, setDisable] = useState(disabled)
  const [val, setVal] = useState(value !== undefined ? value : defaultValue)
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-rate',
    {
      'cd-rate-disabled': disable,
    },
    className
  )
  const countArr = new Array(count).fill('')

  const handleChange: RateChangeEventHandler = (value) => {
    console.log(value)
    let current = value

    if (disable) return

    if (allowClear && val === value) {
      current = 0
    }

    setVal(current)
    onChange?.(current)
  }

  useEffect(() => {
    setDisable(disabled)
  }, [disabled])

  useEffect(() => {
    typeof value === 'number' && setVal(value)
  }, [value])

  return (
    <span
      ref={currentRef}
      className={classes}
      {...rest}
      >
      {
        countArr.map((_, idx) => (
          <span
            key={idx}
            className="cd-rate-item"
          >
            {
              allowHalf &&
                <span
                  className={classNames('cd-rate-item-half', {'cd-rate-item-active': val > idx})}
                  onClick={handleChange.bind(this, idx + 0.5)}
                >
                  {
                    icon || <Icon src={starFillIcon} />
                  }
                </span>
            }
            <span
              className={classNames('cd-rate-item-inner', {'cd-rate-item-active': val - (allowHalf ? 0.5 : 0) > idx})}
              onClick={handleChange.bind(this, idx + 1)}
            >
              {
                icon || <Icon src={starFillIcon} />
              }
            </span>
          </span>
        ))
      }
    </span>
  )
})

Rate.displayName = 'Rate'

export default Rate
