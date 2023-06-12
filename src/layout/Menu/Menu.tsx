import cn from 'classnames'
import { format } from 'date-fns'
import React, { useContext } from 'react'

import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface'
import { TopLevelCategory } from '@/interfaces/page.interface'

import style from './Menu.module.css'
import BooksIcon from './icons/books.svg'
import CourseIcon from './icons/courses.svg'
import ProductsIcon from './icons/products.svg'
import ServicesIcon from './icons/services.svg'

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CourseIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => {
          return (
            <div key={m.route}>
              <a href={`/${m.route}`}>
                <div
                  className={cn(style.firstLevel, {
                    [style.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
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
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={style.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(style.secondLevelBlock, {
                [style.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(style.thirdLevel, {
          [style.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </a>
    ))
  }

  return <div className={style.menu}>{buildFirstLevel()}</div>
}
