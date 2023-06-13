import React from 'react'

import { FirstLevelMenuItem } from '@/interfaces/menu.interface'
import { TopLevelCategory } from '@/interfaces/page.interface'

import BooksIcon from './icons/books.svg'
import CourseIcon from './icons/courses.svg'
import ProductsIcon from './icons/products.svg'
import ServicesIcon from './icons/services.svg'

export const firstLevelMenu: FirstLevelMenuItem[] = [
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