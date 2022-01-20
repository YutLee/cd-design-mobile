import React, { ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type DividerProps = {
  className?: string
  children?: ReactNode
  dashed?: boolean
  align?: 'left' | 'center' | 'right'
  type?: 'horizontal' | 'vertical'
}

const Divider = React.forwardRef<unknown, DividerProps>((props, ref) => {
  const {
    children,
    className = '',
    dashed = false,
    align = 'center',
    type = 'horizontal',
    ...rest
  } = props
  const dividerRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-divider',
    `cd-divider-${type}`,
    `cd-divider-${align}`,
    {
      'cd-divider-dashed': dashed,
      'cd-divider-with-text': children
    },
    className
  )

  return (
    <div
      ref={dividerRef}
      className={classes}
      {...rest}
    >
      {children}
    </div>
  )
})

export default Divider
