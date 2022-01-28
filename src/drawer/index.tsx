import ReactDOM from 'react-dom'
import { createRef, forwardRef, MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Col, Icon, Row } from '..'
import closeSVG from './icons/close.svg'

export type DrawerDirectionType = 'top' | 'right' | 'bottom' | 'left'
export type DrawerProps = {
  children?: ReactNode
  className?: string
  title?: string
  closable?: 'right '| 'left' | ''
  closeIcon?: ReactNode
  extra?: ReactNode
  direction?: DrawerDirectionType
  mask?: boolean
  maskClosable?: boolean
  footer?: ReactNode
  footerClassName?: string
  visible?: boolean
  mountNode?: HTMLElement
  onClose?: MouseEventHandler
}

const InternalDrawer = forwardRef<unknown, DrawerProps>((props, ref) => {
  const {
    children,
    className,
    title,
    closable = 'right',
    closeIcon,
    extra,
    direction = 'bottom',
    mask = true,
    maskClosable = true,
    footer,
    footerClassName,
    visible = false,
    mountNode = document.body,
    onClose,
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
    setOpen(false)
    onClose?.(event)
  }

  const handleMaskClick: MouseEventHandler = (event) => {
    if (!maskClosable) return

    setOpen(false)
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
        <div className={classNames('cd-drawer-mask', {'cd-drawer-mask-open': open})} onClick={handleMaskClick}></div>
      }
      <div
        ref={currentRef}
        className={classes}
        {...rest}
      >
        {
          (title || closable) &&
            <Row  className="cd-drawer-header">
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
            <div className={classNames(
              'cd-drawer-footer',
              footerClassName
            )}>
              {footer}
            </div>
        }
      </div>
    </>
  )
})

const Drawer = (props: DrawerProps) => {
  if (!props.mountNode) {
    return <InternalDrawer {...props} />
  }

  return (
    ReactDOM.createPortal(
      <InternalDrawer {...props} />,
      props.mountNode
    )
  )
}

export default Drawer
