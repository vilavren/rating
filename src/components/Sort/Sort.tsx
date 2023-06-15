import cn from 'classnames'
import React from 'react'

import style from './Sort.module.css'
import { SortEnum, SortProps } from './Sort.props'
import SortIcon from './sort.svg'

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(style.sort, className, { ...props })}>
      <span
        onClick={() => {
          setSort(SortEnum.Raing)
        }}
        className={cn({
          [style.active]: sort === SortEnum.Raing,
        })}
      >
        <SortIcon className={style.sortIcon} /> По рейтингу
      </span>
      <span
        onClick={() => {
          setSort(SortEnum.Price)
        }}
        className={cn({
          [style.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon className={style.sortIcon} /> По&nbsp;цене
      </span>
    </div>
  )
}
