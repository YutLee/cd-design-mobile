import { createRef, forwardRef, MouseEventHandler, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import backSVG from './icons/back.svg'
import searchSVG from './icons/search.svg'
import Input, { InputChangeEventHandler, InputPressEnterEventHandler } from '../input'

export type ToolbarProps = {
  children?: ReactNode
  className?: string
  type?: 'default' | 'search'
  title?: ReactNode
  bordered?: boolean
  backIcon?: ReactNode
  showBackIcon?: boolean
  searchIcon?: ReactNode
  showSearchIcon?: boolean
  placeholder?: string
  suffix?: ReactNode
  extra?: ReactNode
  onSuffixClick?: MouseEventHandler<HTMLSpanElement>
  onBack?: MouseEventHandler<HTMLSpanElement>
  onSearchClick?: MouseEventHandler<HTMLSpanElement>
  onSearchChange?: InputChangeEventHandler
  onSearch?: InputPressEnterEventHandler
}

const Toolbar = forwardRef<unknown, ToolbarProps>((props, ref) => {
  const {
    className,
    children,
    type = 'default',
    title,
    bordered = true,
    backIcon,
    showBackIcon = true,
    searchIcon,
    showSearchIcon = false,
    placeholder = '',
    suffix,
    extra,
    onSuffixClick,
    onBack,
    onSearchClick,
    onSearchChange,
    onSearch,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-toolbar',
    {
      'cd-toolbar-borderless': !bordered
    },
    className
  )

  const inputRef = useRef()

  const handleBack: MouseEventHandler<HTMLSpanElement> = (event) => {
    onBack?.(event)
    !event.isDefaultPrevented() && window.history.back()
  }

  const handleSuffixClick: MouseEventHandler<HTMLSpanElement> = (event) => {
    onSuffixClick?.(event)
    inputRef.current && onSearch?.({currentTarget: inputRef.current})
  }

  const handleSearch: InputPressEnterEventHandler = (event) => {
    onSearch?.(event)
  }

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {
        showBackIcon &&
          <span className="cd-toolbar-back" onClick={handleBack}>
            {
              backIcon || <Icon src={backSVG} color="inherit" />
            }
          </span>
      }
      {
        type === 'search' ?
          <div className="cd-toolbar-search-bar">
            <Input
              ref={inputRef}
              type="search"
              placeholder={placeholder}
              size="s"
              enterKeyHint="search"
              prefix={<Icon src={searchSVG} color="inherit" />}
              onChange={onSearchChange}
              onPressEnter={handleSearch}
            />
          </div> : (
            title &&
              <div className="cd-toolbar-title"><h3>{title}</h3></div>
          )

      }
      {children}
      {
        showSearchIcon &&
          <span className="cd-toolbar-search" onClick={onSearchClick}>
            {
              searchIcon || <Icon src={searchSVG} color="inherit" />
            }
          </span>
      }
      {
        suffix &&
          <span className="cd-toolbar-suffix" onClick={handleSuffixClick}>{suffix}</span>
      }
      {extra}
    </div>
  )
})

export default Toolbar
