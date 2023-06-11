import cn from 'classnames'
import { format } from 'date-fns'
import React, { useContext } from 'react'

import { AppContext } from '@/context/app.context'

import style from './Menu.module.css'

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  return (
    <ul>
      {menu.map((e) => (
        <li key={e._id.secondCategory}>{e._id.secondCategory}</li>
      ))}
    </ul>
  )
}
