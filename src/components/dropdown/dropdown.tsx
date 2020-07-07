import React, { FC } from 'react'
import RcDropdown from 'rc-dropdown'
import { tuple } from '../../utils/type'

const Placements = tuple(
  'bottomLeft',
  'bottomCenter',
  'bottomRight',
  'topLeft',
  'topCenter',
  'topRight'
)

type Placement = typeof Placements[number]

type OverlayFunc = () => React.ReactElement

export interface DropDownProps {
  arrow?: boolean
  disabled?: boolean
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  overlay: React.ReactElement | OverlayFunc
  overlayClassName?: string
  overlayStyle?: string
  placement?: Placement
  trigger?: ('click' | 'hover' | 'contextMenu')[]
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
}

export const DropDown: FC<DropDownProps> = (props: DropDownProps) => {
  return <div>123</div>
}

export default DropDown
