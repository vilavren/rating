import cn from 'classnames'
import React from 'react'

import styles from './Tag.module.css'
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
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.green]: color === 'green',
        [styles.grey]: color === 'grey',
        [styles.primary]: color === 'primary',
        [styles.red]: color === 'red',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
