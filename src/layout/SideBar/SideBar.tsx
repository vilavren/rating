import cn from 'classnames'
import React from 'react'

import { Menu } from '../Menu/Menu'
import Logo from '../logo.svg'

import style from './SideBar.module.css'
import { SideBarProps } from './SideBar.props'

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
  return (
    <div className={cn(className, style.sidebar)} {...props}>
      <Logo className={style.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  )
}
