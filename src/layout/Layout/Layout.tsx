import cn from 'classnames'

import style from './Layout.module.css'
import { LayoutProps } from './Layout.props'
import { Footer, Header, SideBar } from '..'
import { FunctionComponent } from 'react'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <SideBar className={style.sidebar} />
      <div className={style.body}>{children}</div>
      <Footer className={style.footer} />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
