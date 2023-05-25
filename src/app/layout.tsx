import { notoSansKR } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Rating - топ ресурсов',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  )
}
