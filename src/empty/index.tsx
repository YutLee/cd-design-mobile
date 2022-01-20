import { createRef, CSSProperties, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'
import Image from '../image'
import './index.css'
import '../index.css'

export type EmptyProps = {
  children?: ReactNode
  className?: string
  description?: ReactNode
  image?: ReactNode
  imageStyle?: CSSProperties
}

const Empty = forwardRef<unknown, EmptyProps>((props, ref) => {
  const {
    className,
    description,
    image,
    imageStyle,
    children,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-empty',
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      <div className="cd-empty-image" style={imageStyle}>
        {
          typeof image === 'string' ?
          <Image src={image} /> : image
        }
      </div>
      {
        description &&
          <div className="cd-empty-description">{description}</div>
      }
      {children}
    </div>
  )
})

export default Empty
