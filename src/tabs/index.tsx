import React, { createRef, forwardRef, ReactNode, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type TabsProps = {
  children?: ReactNode
  className?: string
  active?: string
  init?: string
  centered?: boolean
  onChange?: (key: string, idx: number) => void
}

export type TabPanelProps = {
  children?: ReactNode
  className?: string
  tab?: ReactNode
  key?: string
}

const TabPanel = forwardRef<unknown, TabPanelProps>((props, ref) => {
  const {
    className,
    children,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-tab-panel',
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {children}
    </div>
  )
})

const InternalTabs = forwardRef<unknown, TabsProps>((props, ref) => {
  const {
    className,
    children,
    init,
    centered = false,
    onChange,
    ...rest
  } = props
  const [active, setActive] = useState(typeof init === 'string' ? init : props.active)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-tabs',
    className
  )
  const listClasses = classNames(
    'cd-tabs-list',
    {
      'cd-tabs-list-center': centered
    }
  )

  const tabRef = useRef<any>()
  const activeRef = useRef<any>()
  const activeBarRef = useRef<any>()

  const handleChange = (key: string, idx: number) => {
    setActive(key)
    onChange?.(key, idx)
  }

  useEffect(() => {
    if (tabRef.current && activeRef.current) {
      tabRef.current.scrollLeft = activeRef.current.offsetLeft + activeRef.current.offsetWidth * 0.5 - window.innerWidth * .5
      activeBarRef.current.style.left = (activeRef.current.offsetWidth - activeBarRef.current.offsetWidth) * .5 + activeRef.current.offsetLeft + 'px'
    }
  }, [active])

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      <div ref={tabRef} className={listClasses}>
        {React.Children.map(children, (arg: any, idx) => {
          return (
            <div
              ref={active === undefined && idx === 0 || active === arg.key ? activeRef : null}
              className={classNames('cd-tab-list', {'cd-tab-list-active': active === undefined && idx === 0 || active === arg.key})}
              key={arg.key}
              onClick={handleChange.bind(this, arg.key, idx)}
            >
              {arg.props.tab}
            </div>
          )
        })}
        <i ref={activeBarRef} className="cd-tabs-active-bar" />
      </div>
      <div className="cd-tabs-panel">
        {React.Children.map(children, (arg: any, idx) => {
          return (
            <TabPanel
              className={classNames({'cd-tab-panel-active': active === undefined && idx === 0 || active === arg.key})}
              {...arg.props}
            />
          )
        })}
      </div>
    </div>
  )
})

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<TabsProps> {
  Panel: typeof TabPanel
}

const Tabs = InternalTabs as CompoundedComponent

Tabs.Panel = TabPanel
Tabs.displayName = 'Tabs'

export default Tabs
