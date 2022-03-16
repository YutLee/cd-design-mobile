import { createRef, CSSProperties, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type CardProps = {
  children?: ReactNode
  className?: string
  bg?: boolean
  margin?: boolean
  padding?: boolean
  radius?: boolean
  style?: CSSProperties
}

const Card = forwardRef<unknown, CardProps>((props, ref) => {
  const {
    className,
    bg = true,
    margin = false,
    padding = false,
    radius = true,
    style,
    children,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  if (typeof margin === 'number') {

  }
  const classes = classNames(
    'cd-card',
    {
      'cd-card-bg': bg,
      'cd-card-margin': margin,
      'cd-card-padding': padding,
      'cd-card-radius': radius
    },
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
