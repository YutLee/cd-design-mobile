import React, { createRef, forwardRef, MouseEventHandler, ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'
import { Icon } from '..'
import nextSVG from './icons/next.svg'

export type ListSpaceSizeType = 's' | 'm' | 'l'
export type ListAlignType = 'left' | 'right' | 'center'

export type ListItemProps = {
  bottomBordered?: boolean
  children?: ReactNode
  className?: string
  label?: ReactNode
  showArrow?: boolean
  arrow?: ReactNode
  padding?: ListSpaceSizeType
  last?: boolean
  contentAlign?: ListAlignType
  onItemClick?: MouseEventHandler
  onArrowClick?: MouseEventHandler
}

export type ListProps = {
  children?: ReactNode
  bordered?: boolean
  className?: string
  margin?: ListSpaceSizeType
  padding?: ListSpaceSizeType
  radius?: ListSpaceSizeType
  contentAlign?: ListAlignType
}

const ListItem = forwardRef<unknown, ListItemProps>((props, ref) => {
  const {
    children,
    className,
    bottomBordered = false,
    label,
    showArrow,
    arrow,
    padding = 'm',
    last,
    onItemClick,
    onArrowClick,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-list-item',
    {
      [`cd-list-item-padding-${padding}`]: padding,
      'cd-list-item-bottom-border': bottomBordered
    },
    className
  )

  const handleItemClick: MouseEventHandler = (event) => {
    onItemClick?.(event)
  }

  const handleArrowClick: MouseEventHandler = (event) => {
    onArrowClick?.(event)
  }

  return (
    <div
      ref={currentRef}
      className={classes}
      onClick={handleItemClick}
      {...rest}
    >
      {
        label &&
          <div className="cd-list-item-label">{label}</div>
      }
      {
        children &&
          <div className="cd-list-item-content">{children}</div>
      }
      {
        showArrow &&
          <div className="cd-list-item-arrow" onClick={handleArrowClick}>
            {arrow || <Icon src={nextSVG} />}
          </div>
      }
    </div>
  )
})

const InternalList = forwardRef<unknown, ListProps>((props, ref) => {
  const {
    children,
    className,
    bordered = false,
    margin = 'm',
    padding = 'm',
    radius = 'm',
    ...rest
  } = props
  let list = React.Children.toArray(children)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-list',
    {
      [`cd-list-margin-${margin}`]: margin,
      [`cd-list-padding-${padding}`]: padding,
      [`cd-list-radius-${radius}`]: /^(s|m|l)$/.test(radius),
      'cd-list-border': bordered
    },
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {list.map((arg: any, idx) => {
        return (
          <ListItem
            key={arg.key}
            {...arg.props}
            last={idx == list.length - 1}
          />
        )
      })}
    </div>
  )
})

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ListProps> {
  Item: typeof ListItem
}

const List = InternalList as CompoundedComponent

List.Item = ListItem

export default List
