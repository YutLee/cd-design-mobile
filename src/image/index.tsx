import { createRef, forwardRef, ReactEventHandler, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type ImageProps = {
  src: string
  alt?: string
  className?: string
  fallback?: string
  loading?: 'eager' | 'lazy',
  onError?: ReactEventHandler<HTMLImageElement>
}

const Image = forwardRef<unknown, ImageProps>((props, ref) => {
  const {
    className,
    src,
    alt,
    fallback,
    loading = 'lazy',
    onError,
    ...rest
  } = props
  const [img, setImg] = useState(src)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-image',
    {
      'cd-image-fallback': !!fallback,
    },
    className
  )

  const handleError: ReactEventHandler<HTMLImageElement> = (event) => {
    fallback && setImg(fallback)
    onError?.(event)
  }

  return (
    <img
      ref={currentRef}
      className={classes}
      src={img}
      alt={alt}
      loading={loading}
      onError={handleError}
      {...rest}
    />
  )
})

export default Image
