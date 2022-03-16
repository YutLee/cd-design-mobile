import { ChangeEvent, createRef, forwardRef, ReactNode, TextareaHTMLAttributes, useRef, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import closeIcon from './icons/close.svg'
import { useMount } from 'cd-hooks'

export type TextareaChangeEventHandler = (event: ChangeEvent<HTMLTextAreaElement>) => void
export type TextareaClearEventHandler = () => void
type countProps = {
  count: number,
  maxLength?: number
}

export type TextareaProps = {
  autoSize?: boolean
  clear?: boolean
  bordered?: boolean
  defaultValue?: string
  disabled?: boolean
  maxLength?: number
  count?: boolean | ((countParams: countProps) => ReactNode)
  value?: string
  onChange?: TextareaChangeEventHandler
  onClear?: TextareaClearEventHandler
} & Omit<TextareaHTMLAttributes<any>, 'prefix' | 'size' | 'onChange'>

const Textarea = forwardRef<unknown, TextareaProps>((props, ref) => {
  const {
    autoSize = false,
    clear = false,
    bordered = true,
    className = '',
    defaultValue,
    disabled = false,
    maxLength,
    count,
    value,
    onChange,
    onClear,
    onFocus,
    onBlur,
    ...rest
  } = props
  const [val, setVal] = useState(typeof value === 'undefined' ? defaultValue : value)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const hiddenRef: any = useRef(null)
  const initRef = useRef(0)
  const classes = classNames(
    'cd-textarea-wrapper',
    {
      'cd-textarea-borderless': !bordered,
    },
    className
  )

  const setHeight = (text: string) => {
    if (!hiddenRef.current) return

    hiddenRef.current.innerText = text

    if (initRef.current < hiddenRef.current?.offsetHeight) {
      currentRef.current.style.height = hiddenRef.current.offsetHeight + 'px'
    } else {
      currentRef.current.style.height = 'auto'
    }
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHeight(event.target.value)
    setVal(event.target.value)
    onChange?.(event)
  }

  const handlClear = () => {
    setHeight('')
    setVal('')
    onClear?.()
  }

  const countParams: countProps = {
    count: val?.length || 0,
    maxLength
  }

  useMount(() => {
    initRef.current = currentRef.current.offsetHeight
  })

  return (
    <span
      ref={currentRef}
      className={classes}
    >
      <textarea
        className="cd-textarea"
        maxLength={maxLength}
        disabled={disabled}
        value={val}
        {...rest}
        onChange={handleChange}
      />
      {
        clear && val !== '' &&
          <Icon src={closeIcon} className="c-textarea-close-icon" color="inherit" onClick={handlClear} />
      }
      {
        count && (
          typeof count === 'boolean' ?
            <div className="c-textarea-count">{val?.length}{maxLength ? `/${maxLength}` : ''}</div> : count(countParams)
        )
      }
      {
        autoSize &&
          <div className="c-textarea-hidden" ref={hiddenRef}></div>
      }
    </span>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
