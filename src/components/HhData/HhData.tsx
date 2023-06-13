import cn from 'classnames'
import React from 'react'

import { Card } from '..'

import style from './HhData.module.css'
import { HhDataProps } from './HhData.props'

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <div className={style.hh}>
      <Card className={style.count}>
        <div className={style.title}>Всего вакансий</div>
        <div className={style.countCalue}>{count}</div>
      </Card>
    </div>
  )
}
