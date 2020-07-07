import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { debug } from 'console'

export interface MenuItemProps {
  /** item 的唯一标志 */
  keyFiled: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

const MenuItem: FC<MenuItemProps> = (props: React.PropsWithChildren<MenuItemProps>) => {
  const { keyFiled, disabled, className, style, children, ...restProps } = props
  const context = useContext(MenuContext)
  const classes = classNames('spirit-menu__item', className, {
    'is-disabled': disabled,
    'is-active': context.defaultSelectedKeys?.some(k => k === keyFiled)
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      if (context.multiple) {
        const defaultSelectedKeys = context.defaultSelectedKeys || []
        if (defaultSelectedKeys.includes(keyFiled)) {
          const index = defaultSelectedKeys.findIndex(i => i === keyFiled)
          defaultSelectedKeys.splice(index, 1)
          context.onSelect(defaultSelectedKeys)
        } else {
          defaultSelectedKeys.push(keyFiled)
          context.onSelect(defaultSelectedKeys)
        }
      } else {
        context.onSelect([keyFiled])
      }
    }
  }
  return (
    <li className={classes} style={style} {...restProps} role="menuitem" onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem
