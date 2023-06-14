import cn from 'classnames'
import React from 'react'

import style from './Advantages.module.css'
import { AdvantagesProps } from './Advantages.props'
import CheckIcon from './check.svg'

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={style.advantage}>
          <CheckIcon />
          <div className={style.title}>{a.title}</div>
          <hr className={style.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  )
}
