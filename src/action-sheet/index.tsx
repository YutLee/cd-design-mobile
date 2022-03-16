import ReactDOM from 'react-dom'
import { createRef, CSSProperties, forwardRef, ReactNode, useState } from 'react'
import { useMount } from 'cd-hooks'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type contentAlignType = 'left' | 'center' | 'right'
export type ActionSheetOpenEventHandler = (config: ActionSheetProps) => void
export type ActionSheetCloseEventHandler = () => void
export type ActionSheetItemProps = {
  content?: ReactNode
  value?: string | number
}
export type ActionSheetProps = {
  instance?: any
  idx?: number
  className?: string
  style?: CSSProperties
  title?: ReactNode
  dataSource?: ActionSheetItemProps[]
  cancelText?: string
  maskClosable?: boolean
  onItemClick?: (data: ActionSheetItemProps, close: ActionSheetCloseEventHandler) => void
  onCancel?: (close: ActionSheetCloseEventHandler) => void
}

const appRoot = document.getElementById('root') || document.body
const actionSheets: Array<HTMLDivElement> = []

const ActionSheet = forwardRef<unknown, ActionSheetProps>((props, ref) => {
  const {
    instance = {},
    idx = 0,
    cancelText = '取消',
    dataSource,
    maskClosable = true,
    ...rest
  } = props
  const [state, setState] = useState<ActionSheetProps>({idx, cancelText, dataSource, maskClosable, ...rest})
  const [open, setOpen] = useState<Boolean>(false)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  let classes = classNames(
    'cd-action-sheet',
    {
      'cd-action-sheet-open': open
    },
    state.className
  )

  const handleClose: ActionSheetCloseEventHandler = () => {
    setOpen(false)
    setState({})
    appRoot?.removeChild(actionSheets[idx])
  }

  const handleItemClick = (data: ActionSheetItemProps) => {
    if (state.onItemClick) {
      state.onItemClick(data, handleClose)
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

  const handleMaskClick = () => {
    state.maskClosable && handleClose()
  }

  const update: ActionSheetOpenEventHandler = (config) => {
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
      <div className={classNames('cd-action-sheet-mask', {'cd-action-sheet-mask-open': open})} onClick={handleMaskClick}></div>
      <div
        ref={currentRef}
        className={classes}
        style={state.style}
      >
        <div className="cd-action-sheet-content">
          {
            state.title &&
              <div className="cd-action-sheet-title">{state.title}</div>
          }
          <div className={classNames('cd-action-sheet-list', {'cd-action-sheet-not-title': !state.title})}>
            {
              state.dataSource?.map((item, idx) => (
                <div className="cd-action-sheet-item" key={idx} onClick={handleItemClick.bind(this, item)}>{item.content}</div>
              ))
            }
          </div>
        </div>
        {
          state.cancelText &&
            <button type="button" className="cd-action-sheet-cancel" onClick={handleCancel}>{state.cancelText}</button>
        }
      </div>
    </>
  )
})

export const actionSheet: ActionSheetOpenEventHandler = (config) => {
  const el = document.createElement('div')
  const idx = actionSheets.length
  let instance = {}

  actionSheets.push(el)
  appRoot.appendChild(el)

  ReactDOM.render(
    <ActionSheet instance={instance} {...config} idx={idx} />,
    el
  )

  return instance
}

ActionSheet.displayName = 'ActionSheet'

export default ActionSheet
