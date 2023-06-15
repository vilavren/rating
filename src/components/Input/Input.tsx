import cn from 'classnames'
import React from 'react'

import style from './Input.module.css'
import { InputProps } from './Input.props'

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={cn(className, style.input)} {...props} />
}
