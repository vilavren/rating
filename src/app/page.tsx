'use client' // This is a client component

import { Button, Htag, P, Tag, Rating } from '@/components'
import { withLayout } from '@/layout'
import { useState } from 'react'

function Home(): JSX.Element {
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
    </>
  )
}

export default withLayout(Home)
