import cn from 'classnames'
import React from 'react'

import styles from './Product.module.css'
import { ProductProps } from './Product.props'

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return <div>{product.title}</div>
}
