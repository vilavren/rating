import cn from 'classnames'
import React from 'react'

import style from './Header.module.css'
import { HeaderProps } from './Header.props'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>
}
