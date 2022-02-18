import { createRef, forwardRef, MouseEventHandler, ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import backSVG from './icons/back.svg'
import searchSVG from './icons/search.svg'

export type ToolbarProps = {
  children?: ReactNode
  className?: string
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
}

const Toolbar = forwardRef<unknown, ToolbarProps>((props, ref) => {
  const {
    className,
    children,
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

  const handleBack: MouseEventHandler<HTMLSpanElement> = (event) => {
    onBack?.(event)
    !event.isDefaultPrevented() && window.history.back()
  }

  const handleSuffixClick: MouseEventHandler<HTMLSpanElement> = (event) => {
    onSuffixClick?.(event)
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
        title &&
          <div className="cd-toolbar-title"><h3>{title}</h3></div>
      }
      {children}
      {
        showSearchIcon &&
          <span className={classNames('cd-toolbar-search', { 'cd-toolbar-search-suffix': suffix })} onClick={onSearchClick}>
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
