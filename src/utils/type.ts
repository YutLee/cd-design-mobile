import { ReactChild } from 'react'

export type ComponentSizeType = 's' | 'm' | 'l' | 'xl'
export type AnchorTargetType = '_self' | '_blank' | '_parent' | '_top'

export type BaseProps = {
  className?: string
  children?: ReactChild
}
