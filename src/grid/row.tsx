import React from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { tuple } from '../utils/type'

const RowAligns = tuple('top', 'middle', 'bottom', 'stretch')
const RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between')

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: typeof RowAligns[number]
  justify?: typeof RowJustify[number]
  wrap?: boolean
  direction?: 'rtl'
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    justify,
    align,
    className,
    style,
    children,
    wrap,
    direction,
    ...rest
  } = props;
  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-row',
    {
      [`cd-row-no-wrap`]: wrap === false,
      [`cd-row-${justify}`]: justify,
      [`cd-row-${align}`]: align,
      [`cd-row-rtl`]: direction === 'rtl',
    },
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {children}
    </div>
  )
})

Row.displayName = 'Row'

export default Row
