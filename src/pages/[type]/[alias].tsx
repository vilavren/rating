'use client'
import { ParsedUrlQuery } from 'querystring'

import axios from 'axios'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

import { firstLevelMenu } from '@/helpers/helpers'
import { MenuItem } from '@/interfaces/menu.interface'
import { TopLevelCategory, TopPageModal } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import { withLayout } from '@/layout'

function Courses({ menu, page, products }: CoursesProps): JSX.Element {
  return <>{products && products.length}</>
}

export default withLayout(Courses)

export const getStaticPaths = async () => {
  let paths: string[] = []

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      { firstCategory: m.id }
    )
    paths = paths.concat(
      menu.flatMap((e) => e.pages.map((p) => `/${m.route}/${p.alias}`))
    )
    console.log('paths:', paths)
    return {
      paths,
      fallback: true,
    }
  }
}

export const getStaticProps: GetStaticProps<CoursesProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type)
  if (!firstCategoryItem) {
    return {
      notFound: true,
    }
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory: firstCategoryItem.id }
  )

  const { data: page } = await axios.get<TopPageModal>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
  )

  const { data: products } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/',
    {
      category: page.category,
      limit: 10,
    }
  )

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
      page,
      products,
    },
  }
}

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  page: TopPageModal
  products: ProductModel[]
}
