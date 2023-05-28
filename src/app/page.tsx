import { Button, Htag } from '@/components'

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
      </div>
    </main>
  )
}
