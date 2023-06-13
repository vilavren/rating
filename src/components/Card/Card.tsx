import cn from 'classnames'
import React from 'react'

import style from './Card.module.css'
import { CardProps } from './Card.props'

export const Card = ({
  children,
  className,
  color = 'white',
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(style.card, className, {
        [style.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  )
}
