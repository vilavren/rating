import cn from 'classnames'
import React from 'react'

import { TopPageComponentProps } from './TopPageComponent.props'

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>
}
