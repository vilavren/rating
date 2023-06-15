import React from 'react'
import { FunctionComponent } from 'react'

import '../../styles/globals.css'

import { IAppContext, AppContextProvider } from '@/context/app.context'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { SideBar } from '../SideBar/SideBar'

import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'
import { notoSansKR } from './fonts'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <main className={notoSansKR.className}>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <SideBar className={styles.sidebar} />
        <div className={styles.body}>{children}</div>
        <Footer className={styles.footer} />
      </div>
    </main>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
