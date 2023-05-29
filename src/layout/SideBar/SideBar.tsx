import cn from 'classnames'

import style from './SideBar.module.css'
import { SideBarProps } from './SideBar.props'

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
  return <div {...props}>SideBar</div>
}
