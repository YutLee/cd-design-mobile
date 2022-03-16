import { createPortal } from 'react-dom'
import { createRef, CSSProperties, forwardRef, MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Col, Icon, Row } from '..'
import closeSVG from './icons/close.svg'

export type DrawerDirectionType = 'top' | 'right' | 'bottom' | 'left'
export type DrawerProps = {
  className?: string
  children?: ReactNode
  closable?: 'right '| 'left' | ''
  closeIcon?: ReactNode
  direction?: DrawerDirectionType
  footer?: ReactNode
  footerClassName?: string
  mask?: boolean
  maskClosable?: boolean
  maskStyle?: CSSProperties
  mountNode?: HTMLElement | boolean
  style?: CSSProperties
  title?: string
  visible?: boolean
  onClick?: MouseEventHandler
  onClose?: MouseEventHandler
  onFooterClick?: MouseEventHandler
}

const InternalDrawer = forwardRef<unknown, DrawerProps>((props, ref) => {
  const {
    children,
    className,
    title,
    closable = 'right',
    closeIcon,
    direction = 'bottom',
    mask = true,
    maskClosable = true,
    footer,
    footerClassName,
    visible = false,
    style,
    maskStyle,
    onClick,
    onClose,
    onFooterClick,
    ...rest
  } = props
  const [open, setOpen] = useState(visible)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-drawer',
    `cd-drawer-${direction}`,
    {
      'cd-drawer-open': open
    },
    className
  )

  const handleClose: MouseEventHandler = (event) => {
    onClose?.(event)
  }

  const handleMaskClick: MouseEventHandler = (event) => {
    if (!maskClosable) return

    onClose?.(event)
  }

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  const close = <Col className="cd-drawer-close" onClick={handleClose}>{closeIcon || <Icon src={closeSVG} size="s" />}</Col>

  return (
    <>
      {
        mask &&
        <div style={maskStyle} className={classNames('cd-drawer-mask', {'cd-drawer-mask-open': open})} onClick={handleMaskClick}></div>
      }
      <div
        ref={currentRef}
        className={classes}
        style={style}
        onClick={onClick}
        {...rest}
      >
        {
          (title || closable) &&
            <Row className="cd-drawer-header">
              {
                closable === 'left' && close
              }
              <Col flex={1} className="cd-drawer-title">
                <h3>{title}</h3>
              </Col>
              {
                closable === 'right' && close
              }
            </Row>
        }
        <div className="cd-drawer-content">
          {children}
        </div>
        {
          footer &&
            <div
              className={classNames(
                'cd-drawer-footer',
                footerClassName
              )}
              onClick={onFooterClick}
            >
              {footer}
            </div>
        }
      </div>
    </>
  )
})

const Drawer = (props: DrawerProps) => {
  const { mountNode = document.body } = props

  if (!mountNode) {
    return <InternalDrawer {...props} />
  }

  const node: HTMLElement = mountNode as HTMLElement

  return (
    createPortal(
      <InternalDrawer {...props} />,
      node
    )
  )
}

Drawer.displayName = 'Drawer'

export default Drawer
