import cn from 'classnames'
import React from 'react'

import { Card } from '..'

import style from './HhData.module.css'
import { HhDataProps } from './HhData.props'
import RateIcon from './rate.svg'

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={style.hh}>
      <Card className={style.count}>
        <div className={style.title}>Всего вакансий</div>
        <div className={style.countCalue}>{count}</div>
      </Card>
      <Card className={style.salary}>
        <div>
          <div className={style.title}>Начальный</div>
          <div className={style.salaryValue}>{juniorSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={style.title}>Средний</div>
          <div className={style.salaryValue}>{middleSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={style.title}>Профессионал</div>
          <div className={style.salaryValue}>{seniorSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
          </div>
        </div>
      </Card>
    </div>
  )
}
