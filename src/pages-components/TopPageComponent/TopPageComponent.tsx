import cn from 'classnames'
import React from 'react'

import { Card, HhData, Htag, Tag } from '@/components'
import { TopLevelCategory } from '@/interfaces/page.interface'

import style from './TopPageComponent.module.css'
import { TopPageComponentProps } from './TopPageComponent.props'

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={style.hhtitle}>
        <Htag tag="h2"> Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  )
}
