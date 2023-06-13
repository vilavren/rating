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
import { TopPageComponent } from '@/pages-components/TopPageComponent/TopPageComponent'

function TopPage({
  menu,
  page,
  products,
  firstCategory,
}: TopPage): JSX.Element {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  )
}

export default withLayout(TopPage)

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
    return {
      paths,
      fallback: true,
    }
  }
}

export const getStaticProps: GetStaticProps<TopPage> = async ({
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

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      { firstCategory: firstCategoryItem.id }
    )

    if (menu.length === 0) {
      return {
        notFound: true,
      }
    }

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
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

interface TopPage extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  page: TopPageModal
  products: ProductModel[]
}
