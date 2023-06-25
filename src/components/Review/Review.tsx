import cn from 'classnames'
import React from 'react'

import styles from './Review.module.css'
import { ReviewProps } from './Review.props'

export const Review = ({ className, ...props }: ReviewProps): JSX.Element => {
  return <div className={cn(styles.review, className)} {...props}></div>
}
