import { SVGInjector } from '@tanem/svg-injector'
import classNames from 'classnames'
import React, { useEffect } from 'react'
import { ComponentSizeType } from '../utils/type'
import './index.css'

type IconType = {
  className?: string
  src: string
  fill?: string
  childFill?: string[]
  color?: 'inherit'
  size?: ComponentSizeType | number
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Icon = React.forwardRef<unknown, IconType>((props: IconType, ref) => {
  const {
    className,
    src = '',
    fill = '',
    childFill = [],
    color = '',
    size = 'm',
    ...rest
  } = props
  const style = typeof size === 'number' ? {width: `${size}px`, height: `${size}px`} : {}
  const classes = classNames(
    'cd-icon',
    {
      'cd-icon-s': size === 's',
      'cd-icon-l': size === 'l',
      'cd-icon-xl': size === 'xl'
    },
    className
  )
  const iconRef = (ref as any) || React.createRef<HTMLElement>()

  useEffect(() => {
    const inner = document.createElement('span')
    inner.setAttribute('data-src', src)
    iconRef.current.innerHTML = ''
    iconRef.current.appendChild(inner)
    SVGInjector(inner, {
      beforeEach(svg) {
        svg.setAttribute('width', '100%')
        svg.setAttribute('height', '100%')

        fill && svg.setAttribute('fill', fill)

        if (childFill?.length > 0) {
          childFill.forEach((item, idx) => {
            svg.children[idx]?.setAttribute('fill', item)
          })
        }

        // 合并path
        // const path = svg.getElementsByTagName('path')
        // const size = path.length
        // const points = []

        // if (size <= 0) return

        // for(let i = 0; i < size; i++) {
        //   points.push(path[i]?.getAttribute('d')) //?.split(/(?=L)/g)
        // }

        // path[0].setAttribute('d', points.join(''))

        // while (svg.getElementsByTagName('path').length > 1) {
        //   svg.removeChild(svg.getElementsByTagName('path')[svg.getElementsByTagName('path').length - 1])
        // }
      },
      afterEach (_, svg) {
        const children = svg?.children || []
        let size: number = children?.length || 0

        if (!fill && childFill?.length <= 0 && color === 'inherit' && svg?.parentElement) {
          svg.setAttribute('fill', window.getComputedStyle(svg?.parentElement, null).color)

          while (size > 0) {
            children[size - 1]?.removeAttribute('fill')
            size--
          }
        }
      }
    })
  }, [src])

  return (
    <span data-src={src} ref={iconRef} className={classes} style={style} {...rest}></span>
  )
})

export default Icon
