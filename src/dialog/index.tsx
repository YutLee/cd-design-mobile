import ReactDOM from 'react-dom'
import { createRef, CSSProperties, forwardRef, ReactNode, useState } from 'react'
import { useMount } from 'cd-hooks'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type contentAlignType = 'left' | 'center' | 'right'
export type DialogOpenEventHandler = (config: DialogProps) => void
export type DialogCloseEventHandler = () => void
export type DialogProps = {
  instance?: any
  idx?: number
  className?: string
  style?: CSSProperties
  title?: ReactNode
  content?: ReactNode
  contentAlign?: contentAlignType
  okText?: string
  cancelText?: string
  onOk?: (close: DialogCloseEventHandler) => void
  onCancel?: (close: DialogCloseEventHandler) => void
}

const appRoot = document.getElementById('root') || document.body
const dialogs: Array<HTMLDivElement> = []

const Dialog = forwardRef<unknown, DialogProps>((props, ref) => {
  const {
    instance = {},
    idx = 0,
    okText = '确定',
    cancelText = '取消',
    contentAlign = 'center',
    ...rest
  } = props
  const [state, setState] = useState<DialogProps>({idx, okText, cancelText, ...rest})
  const [open, setOpen] = useState<Boolean>(false)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  let classes = classNames(
    'cd-dialog',
    {
      'cd-dialog-open': open
    },
    state.className
  )

  const handleClose: DialogCloseEventHandler = () => {
    setOpen(false)
    setState({})
    appRoot?.removeChild(dialogs[idx])
  }

  const handleOk = () => {
    if (state.onOk) {
      state.onOk(handleClose)
    } else {
      handleClose()
    }
  }

  const handleCancel = () => {
    if (state.onCancel) {
      state.onCancel(handleClose)
    } else {
      handleClose()
    }
  }

  const update: DialogOpenEventHandler = (config) => {
    setState(prevState => ({
      ...prevState,
      ...config
    }))
  }

  instance.update = update

  useMount(() => {
    setOpen(true)
  })

  return (
    <>
      <div className={classNames('cd-dialog-mask', {'cd-dialog-mask-open': open})}></div>
      <div
        ref={currentRef}
        className={classes}
        style={state.style}
      >
        <div className="cd-dialog-title">{state.title}</div>
        <div className="cd-dialog-content" style={{textAlign: contentAlign}}>{state.content}</div>
        {
          state.okText && state.cancelText ?
            <div className="cd-dialog-options">
              <button type="button" className="cd-dialog-cancel" onClick={handleCancel}>{state.cancelText}</button>
              <button type="button" className="cd-dialog-ok" onClick={handleOk}>{state.okText}</button>
            </div> : (
              state.okText ?
                <button type="button" className="cd-dialog-ok cd-dialog-ok-only" onClick={handleOk}>{state.okText}</button> :
                (state.cancelText && <button type="button" className="cd-dialog-cancel cd-dialog-cancel-only" onClick={handleCancel}>{state.cancelText}</button>)
            )
        }
      </div>
    </>
  )
})

const dialog: DialogOpenEventHandler = (config) => {
  const el = document.createElement('div')
  const idx = dialogs.length
  let instance = {}

  dialogs.push(el)
  appRoot.appendChild(el)

  ReactDOM.render(
    <Dialog instance={instance} {...config} idx={idx} />,
    el
  )

  return instance
}

export default dialog
