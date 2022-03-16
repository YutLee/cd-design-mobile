import { createRef, forwardRef, MouseEventHandler, ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import searchSVG from './icons/search.svg'
import Input, { InputChangeEventHandler, InputPressEnterEventHandler, InputProps } from '../input'

export type SearchBarSearchEventHandler = (value: string) => void
export type SearchBarCancelEventHandler = () => void

export type SearchBarProps = InputProps & {
  searchIcon?: ReactNode
  showSearchIcon?: boolean
  showButton?: ReactNode
  searchButton?: ReactNode
  cancelButton?: ReactNode
  onSearchClick?: MouseEventHandler<HTMLSpanElement>
  onSearchChange?: InputChangeEventHandler
  onSearch?: SearchBarSearchEventHandler
  onCancel?: SearchBarCancelEventHandler
}

const SearchBar = forwardRef<unknown, SearchBarProps>((props, ref) => {
  const {
    className,
    children,
    searchIcon,
    showSearchIcon = true,
    showButton = true,
    searchButton,
    cancelButton,
    value,
    clear = true,
    onSearchClick,
    onSearchChange,
    onSearch,
    onCancel,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-search-bar',
    className
  )

  const handleSearchClick: MouseEventHandler<HTMLSpanElement> = (event) => {
    onSearchClick?.(event)
  }

  const handleSearch: InputPressEnterEventHandler = (event) => {
    onSearch?.(event.currentTarget.value)
  }

  const handleSearchChange: InputChangeEventHandler = (event) => {
    onSearchChange?.(event)
  }

  return (
    <div
      ref={currentRef}
      className={classes}
    >
      <Input
        value={value}
        type="search"
        size="s"
        enterKeyHint="search"
        clear={clear}
        prefix={
          showSearchIcon && (
            searchIcon || <Icon src={searchSVG} />
          )
        }
        onClick={handleSearchClick}
        onChange={handleSearchChange}
        onPressEnter={handleSearch}
        {...rest}
      />
      {
        showButton && (
          value ?
            <div className="c-search-bar-s-btn" onClick={() => onSearch?.(value)}>{ searchButton || '搜索' }</div> :
            <div className="c-search-bar-c-btn" onClick={() => onCancel?.()}>{ cancelButton || '取消' }</div>
        )
      }
    </div>
  )
})

SearchBar.displayName = 'SearchBar'

export default SearchBar
