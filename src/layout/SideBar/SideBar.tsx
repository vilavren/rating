import cn from 'classnames'
import React from 'react'

import { Menu } from '../Menu/Menu'

import style from './SideBar.module.css'
import { SideBarProps } from './SideBar.props'

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  )
}
