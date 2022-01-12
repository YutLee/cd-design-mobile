import { createRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type BadgeProps = {
  children?: ReactNode
  className?: string
  count?: number
  dot?: boolean
  offset?: [number, number]
  max?: number
  showZero?: boolean
  title?: string
}

const Badge = forwardRef<unknown, BadgeProps>((props, ref) => {
  const {
    children,
    className = '',
    count = 0,
    dot = false,
    offset = [],
    max = 99,
    showZero = false,
    title = '',
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-badge',
    {
      'cd-badge-no-wrapper': children === undefined || children === null
    },
    className
  )

  return (
    <span
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {children}
      {
        dot ?
          <sup className="cd-badge-dot" title={title} /> : (
            (showZero || count > 0) &&
              <sup className="cd-badge-count" title={title}>{count > max ? `${max}+` : count}</sup>
          )
      }
    </span>
  )
})

export default Badge
