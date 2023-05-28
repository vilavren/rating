import { Button, Htag, P, Tag } from '@/components'

export default function Home() {
  return (
    <main>
      <div>
        <p>Get started by editing</p>
        <Htag tag="h1">Тест</Htag>
        <Button appearance="primary">Кнопка</Button>
        <Button appearance="primary">Кнопка</Button>
        <Button appearance="ghost" arrow="right">
          Кнопка ghost
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
        <Tag size="s" color="green">
          green
        </Tag>
        <Tag color="red">red</Tag>
      </div>
    </main>
  )
}
