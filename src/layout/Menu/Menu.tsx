import cn from 'classnames'
import { format } from 'date-fns'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import { AppContext } from '@/context/app.context'
import { firstLevelMenu } from '@/helpers/helpers'
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface'

import style from './Menu.module.css'

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)
  const router = useRouter()
  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened
          }
          return m
        })
      )
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => {
          return (
            <div key={m.route}>
              <Link href={`/${m.route}`}>
                <div
                  className={cn(style.firstLevel, {
                    [style.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </Link>
              {m.id === firstCategory && buildSecondLevel(m)}
            </div>
          )
        })}
      </>
    )
  }
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={style.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])
          ) {
            m.isOpened = true
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={style.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(style.secondLevelBlock, {
                  [style.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(style.thirdLevel, {
          [style.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
        })}
      >
        {p.category}
      </Link>
    ))
  }

  return <div className={style.menu}>{buildFirstLevel()}</div>
}
