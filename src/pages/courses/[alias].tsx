'use client'
import { ParsedUrlQuery } from 'querystring'

import axios from 'axios'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import React, { useState } from 'react'

import { MenuItem } from '@/interfaces/menu.interface'
import { TopPageModal } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import { withLayout } from '@/layout'

const firstCategory = 0

function Courses({ menu, page, products }: CoursesProps): JSX.Element {
  return <>{products && products.length}</>
}

export default withLayout(Courses)

export const getStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  )
  return {
    paths: menu.flatMap((m) => m.pages.map((p) => '/courses/' + p.alias)),
    fallback: true,
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

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  )

  const { data: page } = await axios.get<TopPageModal>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
  )

  const { data: products } = await axios.post<ProductModel>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/',
    {
      category: page.category,
      limit: 10,
    }
  )

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  }
}

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
  page: TopPageModal
  products: ProductModel[]
}
