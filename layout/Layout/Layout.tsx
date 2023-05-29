import cn from 'classnames'

import style from './P.module.css'
import { LayoutProps } from './Layout.props'
import { Footer, Header, SideBar } from '..'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        <div>{children}</div>
      </div>

      <Footer />
    </>
  )
}
