import cn from 'classnames'

import style from './P.module.css'
import { LayoutProps } from './Layout.props'

export const P = ({ children }: LayoutProps): JSX.Element => {
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
