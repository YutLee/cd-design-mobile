import React, { createRef, forwardRef, MouseEventHandler, ReactNode, useRef, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Drawer, Icon } from '..'
import arrowDownSVG from './icons/arrow-down.svg'
import checkedSVG from './icons/checked.svg'
import { useMount } from 'cd-hooks'

export type DropdownChangeHandler = (option: any) => void
export type DropdownOptionProps = {
  className?: string
  children?: ReactNode
  disabled?: boolean
  icon?: ReactNode
  last?: boolean
  selected?: boolean
  showIcon?: boolean
  value: string | number
  onClick?: MouseEventHandler
}
export type DropdownProps = {
  arrow?: ReactNode
  className?: string
  children?: ReactNode
  disabled?: boolean
  footer?: ReactNode
  footerClassName?: string
  showArrow?: boolean
  value?: string | number
  onChange?: DropdownChangeHandler
}

const DropdownOption = forwardRef<unknown, DropdownOptionProps>((props, ref) => {
  const {
    children,
    className,
    disabled = false,
    selected = false,
    value,
    showIcon = true,
    icon,
    last,
    onClick,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-dropdown-option',
    {
      'cd-dropdown-option-selected': selected,
      'cd-dropdown-option-disabled': disabled
    },
    className
  )

  const handleItemClick: MouseEventHandler = (event) => {
    !disabled && onClick?.(event)
  }

  return (
    <div
      ref={currentRef}
      className={classes}
      onClick={handleItemClick}
      {...rest}
    >
      {
        children &&
          <div className="cd-dropdown-option-content">{children}</div>
      }
      {
        showIcon && selected &&
          <div className="cd-dropdown-option-icon">
            {icon || <Icon src={checkedSVG} />}
          </div>
      }
    </div>
  )
})

const InternalDropdown = forwardRef<unknown, DropdownProps>((props, ref) => {
  const {
    children,
    className,
    disabled = false,
    showArrow = true,
    arrow,
    footer,
    footerClassName,
    value,
    onChange,
    ...rest
  } = props

  const list = React.Children.toArray(children)
  let idx = 0, length = list.length, item: any, current: any

  for (; idx < length; idx++) {
    item = list[idx]
    if (!item.props.disabled && (value === item.props.value || item.props.selected)) {
      current = {...item.props, idx}
      break
    }
  }

  if (!current) {
    item = list[0]
    current = {...item.props, idx: 0}
  }

  const [top, setTop] = useState(0)
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(current)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const currentIdRef = useRef(`cd-dropdown-${Date.now()}-${Math.ceil(Math.random() * 1000)}`)
  const classes = classNames(
    'cd-dropdown',
    {
      'cd-dropdown-active': visible,
      'cd-dropdown-disabled': disabled
    },
    className
  )

  const getTop = () => currentRef.current.offsetTop + currentRef.current.offsetHeight - (document.documentElement.scrollTop || document.body.scrollTop)

  const handleClose = () => {
    setVisible(false)
  }

  const handleClick = () => {
    if (disabled) return

    setVisible(!visible)
    setTop(getTop())
  }

  const handleDrawerClick: MouseEventHandler = (event) => {
    event.stopPropagation()
  }

  const handleOptionClick: DropdownChangeHandler = (option) => {
    if (option.disabled) return

    setVisible(false)

    if (value !== option.value) {
      setSelected(option)
      onChange?.(option)
    }
  }

  useMount(() => {
    setTop(getTop())

    document.addEventListener('click', (event) => {
      const target: any = event.target

      if (target && target.id === currentIdRef.current) return

      setVisible(false)
    }, false)
  })

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      <div id={currentIdRef.current} onClick={handleClick}>
        <span className="cd-dropdown-current">
          {selected.children}
        </span>
        <span className="cd-dropdown-arrow"><Icon src={arrowDownSVG} /></span>
      </div>
      <Drawer
        visible={visible}
        closable=""
        direction="top"
        className="cd-drawer-dropdown-options"
        style={{top: top + 'px'}}
        maskStyle={{top: top + 'px'}}
        footer={footer}
        onClose={handleClose}
        onFooterClick={handleClose}
        onClick={handleDrawerClick}
      >
        {list.map((arg: any, idx) => {
          return (
            <DropdownOption
              key={arg.key}
              onClick={handleOptionClick.bind(this, {idx, ...arg.props})}
              {...arg.props}
              selected={selected.idx === idx}
              last={idx == list.length - 1}
            />
          )
        })}
      </Drawer>
    </div>
  )
})

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<DropdownProps> {
    Option: typeof DropdownOption
}

const Dropdown = InternalDropdown as CompoundedComponent

Dropdown.Option = DropdownOption
Dropdown.displayName = 'Dropdown'

export default Dropdown
