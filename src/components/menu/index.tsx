import Menu, { MenuProps } from './menu'
import MenuItem, { MenuItemProps } from './menuItem'
import { FC } from 'react'
import { SubMenuProps } from './subMenu'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem

export default TransMenu
