import axios from 'axios'
import { GetStaticProps } from 'next'
import React, { useState } from 'react'

import { Button, Htag, P, Tag, Rating, Input, Textarea } from '@/components'
import { MenuItem } from '@/interfaces/menu.interface'
import { withLayout } from '@/layout/Layout/Layout'

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">Тест</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P>средний</P>
      <P size="s">маленький</P>
      <Tag size="m" color="ghost">
        ghost
      </Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="m" color="grey">
        grey
      </Tag>
      <Tag size="m" color="green">
        green
      </Tag>
      <Tag size="m" color="primary">
        primary
      </Tag>
      <Rating rating={4} isEditable setRating={setRating} />
      <Input placeholder="тест" />
      <Textarea placeholder="тест" />
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
