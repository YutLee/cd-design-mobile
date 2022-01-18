import { SVGInjector } from '@tanem/svg-injector'
import classNames from 'classnames'
import { createRef, forwardRef, MouseEvent, MouseEventHandler, MutableRefObject, TouchEventHandler, useEffect, useRef } from 'react'
import { ComponentSizeType } from '../utils/type'
import './index.css'

type IconType = {
  className?: string
  src: string
  fill?: string
  childFill?: string[]
  color?: 'inherit'
  size?: ComponentSizeType | number
  onClick?: () => void
}

const Icon = forwardRef<unknown, IconType>((props: IconType, ref) => {
  const {
    className,
    src = '',
    fill = '',
    childFill = [],
    color = '',
    size = 'm',
    onClick,
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
  const iconRef = (ref as any) || createRef<HTMLElement>()
  const mousetRef: MutableRefObject<boolean> = useRef(false)
  const touchRef: MutableRefObject<boolean> = useRef(false)

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
  }, [src, fill, childFill, color])

  /**
   * @param event
   * 因为加了svg关系，导致 input 在 focus 的时候，click 事件没有响应
   * 所以暂时用 mountdown 和 mouseup 模拟 click 事件
   */
  const handleMountDown: MouseEventHandler<HTMLElement> = () => {
    if (!touchRef.current) {
      mousetRef.current = true
    }
  }

  const handleMountUp: MouseEventHandler<HTMLElement> = () => {
    if (mousetRef.current) {
      onClick?.()
    }
    mousetRef.current = false
  }

  const handleTouchStart: TouchEventHandler<HTMLElement> = () => {
    touchRef.current = true
  }

  const handleTouchEnd: TouchEventHandler<HTMLElement> = () => {
    if (touchRef.current) {
      onClick?.()
    }
    touchRef.current = false
  }

  return (
    <span
      data-src={src}
      ref={iconRef}
      className={classes}
      style={style}
      onMouseDown={handleMountDown}
      onMouseUp={handleMountUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...rest}
    ></span>
  )
})

export default Icon
