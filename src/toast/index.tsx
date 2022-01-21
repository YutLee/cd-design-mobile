import ReactDOM from 'react-dom'
import { createRef, CSSProperties, forwardRef, ReactNode, useRef, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type ToastProps = {
  children?: ReactNode
  className?: string
}

export type ToastConfigType = {
  content: ReactNode
  duration?: number
  icon?: ReactNode
  className?: string
  style?: CSSProperties,
  onClose?: () => void
}

export type ToastOpenEventHandler = (content: ReactNode, duration?: number, onClose?: () => void) => void

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLInputElement>> {
  open: ToastOpenEventHandler
  close?: () => void
}

const appRoot = document.getElementById('root') || document.body

const InternalToast = forwardRef<unknown, ToastProps>((props, ref) => {
  const {
    className,
    ...rest
  } = props
  const [content, setContent] = useState<ReactNode>('')
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-toast',
    {
      'cd-toast-open': !!content
    },
    className
  )
  const timer = useRef<number>()
  const el = useRef(document.createElement('div'))

  const handleOpen: ToastOpenEventHandler = (content, duration = 3, onClose) => {
    clearTimeout(timer.current)
    setContent(content)
    appRoot?.appendChild(el.current)

    if (duration) {
      timer.current = setTimeout(() => {
        appRoot?.removeChild(el.current)
        setContent('')
        onClose?.()
      }, duration * 1000)
    }
  }

  Toast.open = handleOpen

  return (
    ReactDOM.createPortal(
      <div
        ref={currentRef}
        className={classes}
        {...rest}
      >
        <div className="cd-toast-inner">{content}</div>
      </div>,
      el.current
    )
  )
})

export const Toast = InternalToast as CompoundedComponent

const toast: ToastOpenEventHandler = (content, duration, onClose) => {
  Toast.open(content, duration, onClose)
}

export default toast
