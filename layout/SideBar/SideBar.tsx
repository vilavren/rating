import cn from 'classnames'

import style from './P.module.css'
import { SideBarProps } from './SideBar.props'

export const P = ({ ...props }: SideBarProps): JSX.Element => {
  return <div {...props}></div>
}
