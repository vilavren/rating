import cn from 'classnames'

import style from './Footer.module.css'
import { FooterProps } from './Footer.props'

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>
}
