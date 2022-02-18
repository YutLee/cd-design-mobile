import React, { createRef, forwardRef, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import '../index.css'

export type TimelineItemProps = {
  children?: ReactNode
  className?: string
  dot?: ReactNode
  label?: ReactNode
  last?: boolean
}

export type TimelineProps = {
  children?: ReactNode
  className?: string
  reverse?: boolean
  active?: number
}

const TimelineItem = forwardRef<unknown, TimelineItemProps>((props, ref) => {
  const {
    className,
    children,
    dot,
    label,
    last,
    ...rest
  } = props
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-timeline-item',
    className
  )

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {
        label &&
          <div className="cd-timeline-item-label">{label}</div>
      }
      <div className="cd-timeline-item-line">
        <span className="cd-timeline-item-dot"></span>
        {
          !last &&
            <span className="cd-timeline-item-tail"></span>
        }
      </div>
      <div className="cd-timeline-item-content">{children}</div>
    </div>
  )
})

const InternalTimeline = forwardRef<unknown, TimelineProps>((props, ref) => {
  const {
    className,
    children,
    reverse,
    active,
    ...rest
  } = props
  let list = React.Children.toArray(children)
  const [current, setCurrent] = useState(typeof active === 'number' ? active : undefined)
  const currentRef = (ref as any) || createRef<HTMLElement>()
  const classes = classNames(
    'cd-timeline',
    className
  )

  useEffect(() => {
    setCurrent(active)
  }, [active])

  if (reverse) {
    list.reverse()
  }

  return (
    <div
      ref={currentRef}
      className={classes}
      {...rest}
    >
      {list.map((arg: any, idx) => {
        return (
          <TimelineItem
            key={arg.key}
            className={classNames({
              'cd-timeline-item-active': current === list.length - idx - 1
            })}
            {...arg.props}
            last={idx == list.length - 1}
          />
        )
      })}
    </div>
  )
})

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<TimelineProps> {
  Item: typeof TimelineItem
}

const Timeline = InternalTimeline as CompoundedComponent

Timeline.Item = TimelineItem

export default Timeline
