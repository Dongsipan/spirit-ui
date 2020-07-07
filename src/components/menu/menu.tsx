import React, { CSSProperties, createContext, FC, useState } from 'react'
import classNames from 'classnames'
import { tuple } from '../../utils/type'
import { MenuItemProps } from './menuItem'

const MenuModes = tuple('horizontal', 'vertical', 'inline')

type MenuMode = typeof MenuModes[number]

export interface MenuProps {
  /** 初始展开的 SubMenu 菜单项 key 数组 */
  defaultOpenKeys?: string[]
  /** 初始选中的菜单项 key 数组 */
  defaultSelectedKeys?: string[]
  /** 自定义样式名 */
  className?: string
  /** 菜单类型，现在支持垂直、水平、和内嵌模式三种 */
  mode?: MenuMode
  /** 自定义样式 */
  style?: CSSProperties
  /** 被选中时调用 */
  onSelect?: (selectedKey: string[]) => void
  /** 是否允许多选 */
  multiple?: boolean
}

interface IMenuContext {
  multiple?: boolean
  onSelect?: (selectedKey: string[]) => void
  mode?: MenuMode
  defaultOpenKeys?: string[]
  defaultSelectedKeys?: string[]
}

export const MenuContext = createContext<IMenuContext>({})
/**
 * 为网站提供导航功能的菜单，支持横向纵向和内联三种模式。
 * ~~~js
 * import { Menu } from 'spirit-ui'
 * ~~~
 */
export const Menu: FC<MenuProps> = (props: React.PropsWithChildren<MenuProps>) => {
  const {
    className,
    mode,
    style,
    children,
    defaultOpenKeys,
    defaultSelectedKeys,
    onSelect,
    multiple
  } = props
  const activeKeys = defaultSelectedKeys || []
  const [currentActive, setActive] = useState(activeKeys)
  const classes = classNames('spirit-menu', className, {
    'is-vertical': mode === 'vertical',
    'is-horizontal': mode === 'horizontal',
    'is-inline': mode === 'inline'
  })

  const handelClick = (key: string[]) => {
    setActive(typeof key === 'string' ? [key] : key)
    setActive(() => [...key])
    if (onSelect) {
      onSelect(key)
    }
  }

  const passedContext: IMenuContext = {
    onSelect: handelClick,
    mode,
    multiple,
    defaultOpenKeys,
    defaultSelectedKeys: currentActive
  }

  const renderChildren = () => {
    return React.Children.map(children, child => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          keyFiled: childElement.props.keyFiled
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component')
      }
    })
  }

  return (
    <ul className={classes} style={style} role="menu" data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultOpenKeys: []
}

export default Menu
