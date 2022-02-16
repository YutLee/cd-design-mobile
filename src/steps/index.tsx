import React, { createRef, forwardRef, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type StepsProps = {
  children?: ReactNode
  className?: string
  current?: number
  initial?: number
}

const Steps = forwardRef<unknown, StepsProps>((props, ref) => {
  const {
    className,
    children,
    current = 0,
    initial = 0,
    ...rest
  } = props
  const [active, setActive] = useState(current + initial)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-steps',
    className
  )

  useEffect(() => {
    setActive(current + initial)
  }, [current, initial])

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {React.Children.map(children, (arg: any, idx) => {
        return (
          <div
            className={classNames('cd-steps-item', {'cd-steps-item-active': active >= idx + initial})}
            key={arg.key}
          >
            {
              idx < React.Children.toArray(children).length - 1 &&
                <i className={classNames('cd-steps-item-line', {'cd-steps-item-line-active': active > idx + initial})} />
            }
            <div className="cd-steps-item-icon">{initial + idx}</div>
            <div className="cd-steps-item-content">
              {arg.props.children}
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default Steps
