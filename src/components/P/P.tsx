import cn from 'classnames'

import style from './P.module.css'
import { PProps } from './P.props'

export const P = ({
  children,
  size = 'm',
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(style.p, className, {
        [style.s]: size === 's',
        [style.m]: size === 'm',
        [style.l]: size === 'l',
      })}
    >
      {children}
    </p>
  )
}
