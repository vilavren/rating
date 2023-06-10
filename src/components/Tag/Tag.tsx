import cn from 'classnames'
import React from 'react'

import style from './Tag.module.css'
import { TagProps } from './Tag.props'

export const Tag = ({
  children,
  size = 's',
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(style.tag, className, {
        [style.s]: size === 's',
        [style.m]: size === 'm',
        [style.ghost]: color === 'ghost',
        [style.green]: color === 'green',
        [style.grey]: color === 'grey',
        [style.primary]: color === 'primary',
        [style.red]: color === 'red',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
