import React, { FC, useContext, FunctionComponentElement, useState } from 'react'
import Transition from '../transition'
import { MenuContext } from './menu'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
export interface SubMenuProps {
  keyFiled: string
  title: string
  className?: string
}

const SubMenu: FC<SubMenuProps> = (props: React.PropsWithChildren<SubMenuProps>) => {
  const { keyFiled, title, children, className } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenKeys as string[]
  const isOpened = context.mode === 'vertical' ? openedSubMenus.includes(keyFiled) : false
  const [menuOpen, setMenuOpen] = useState(isOpened)
  const classes = classNames('spirit-menu__item', 'spirit-menu__submenu-item', className, {
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  let timer: NodeJS.Timeout

  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick
        }
      : {}
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
          }
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('spirit-menu__submenu')
    const childrenComponent = React.Children.map(children, child => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          keyFiled: childElement.props.keyFiled
        })
      } else {
        console.log('Warning: SubMenu has a child which is not a MenuItem component')
      }
    })
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    )
  }
  return (
    <li key={keyFiled} className={classes} {...hoverEvents}>
      <div className="spirit-menu__submenu__title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
