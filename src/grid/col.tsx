import React from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

type ColSpanType = number | string

type FlexType = number | 'none' | 'auto' | string

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: FlexType
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
}

const Col = React.forwardRef<unknown, ColProps>((props, ref) => {
  const {
    children,
    className,
    flex,
    ...rest
  } = props

  function parseFlex(flex: FlexType): string {
    if (typeof flex === 'number') {
      return `${flex} ${flex} auto`;
    }

    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
      return `0 0 ${flex}`;
    }

    return flex;
  }

  const currentRef = (ref as any) || React.createRef<HTMLElement>()
  const classes = classNames(
    'cd-col',
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      style={flex ? {flex: parseFlex(flex)} : {}}
      {...rest}
    >
      {children}
    </div>
  )
})

export default Col
