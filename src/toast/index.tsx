import ReactDOM from 'react-dom'
import { createRef, CSSProperties, forwardRef, ReactNode, useRef, useState } from 'react'
import { Icon } from '..'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import loadingSVG from './icons/loading.svg'
import successSVG from './icons/success.svg'
import errorSVG from './icons/error.svg'

export type ToastType = 'default' | 'loading' | 'success' | 'error'

export type ToastProps = {
  className?: string
  style?: CSSProperties
  type?: ToastType
  duration?: number
  icon?: ReactNode
  loadingIcon?: ReactNode
  successIcon?: ReactNode
  errorIcon?: ReactNode
}

export type ToastConfigType = {
  content: ReactNode
  type?: ToastType
  duration?: number
  icon?: ReactNode
  className?: string
  style?: CSSProperties
  onClose?: () => void
}

export type ToastOpenEventHandler = (config: ToastConfigType) => void

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLInputElement>> {
  open: ToastOpenEventHandler
  close?: () => void
}

const appRoot = document.getElementById('root') || document.body

const InternalToast = forwardRef<unknown, ToastProps>((props, ref) => {
  const {
    className,
    style,
    icon,
    type,
    duration,
    loadingIcon = <Icon src={loadingSVG} color="inherit" />,
    successIcon = <Icon src={successSVG} color="inherit" />,
    errorIcon = <Icon src={errorSVG} color="inherit" />,
    ...rest
  } = props
  const [state, setState] = useState<ToastConfigType>({
    content: '',
    style,
    icon,
    type,
    duration
  })
  const currentRef = (ref as any) || createRef<HTMLElement>()
  let classes = classNames(
    'cd-toast',
    {
      'cd-toast-open': !!state?.content,
      'cd-toast-with-icon': state.type !== 'default'
    },
    className
  )
  const timer = useRef<number>()
  const el = useRef(document.createElement('div'))

  const handleOpen: ToastOpenEventHandler = (config) => {
    const {
      content,
      type = props.type || 'default',
      duration = props.duration || 3,
      icon = props.icon,
      className,
      style = props.style,
      onClose
    } = config

    classes = classNames(className)

    clearTimeout(timer.current)
    setState({
      content,
      style,
      icon,
      type,
      duration
    })
    appRoot?.appendChild(el.current)

    if (duration) {
      timer.current = setTimeout(() => {
        appRoot?.removeChild(el.current)
        setState(prevState => ({
          ...prevState,
          content: ''
        }))
        onClose?.()
      }, duration * 1000)
    }

    return () => {
      clearTimeout(timer.current)
      appRoot?.removeChild(el.current)
      setState(prevState => ({
        ...prevState,
        content: ''
      }))
      onClose?.()
    }
  }

  Toast.open = handleOpen

  return (
    ReactDOM.createPortal(
      <div
        ref={currentRef}
        className={classes}
        style={state.style}
        {...rest}
      >
        <div className="cd-toast-inner">
          {
            state.type !== 'default' && (
              state.icon !== undefined ?
              state.icon : state.type === 'loading' ?
                  loadingIcon : state.type === 'success' ?
                    successIcon : state.type === 'error' ?
                      errorIcon : null
            )
          }
          <div>{state.content}</div>
        </div>
      </div>,
      el.current
    )
  )
})

export const Toast = InternalToast as CompoundedComponent

const toast: ToastOpenEventHandler = (config) => {
  Toast.open(config)
}

export default toast
