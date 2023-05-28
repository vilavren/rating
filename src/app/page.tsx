import { Button, Htag, P } from '@/components'

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
      </div>
    </main>
  )
}
