import cn from 'classnames'
import React from 'react'

import { Search } from '@/components'

import { Menu } from '../Menu/Menu'
import Logo from '../logo.svg'

import styles from './SideBar.module.css'
import { SideBarProps } from './SideBar.props'

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  )
}
