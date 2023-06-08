import cn from 'classnames'

import style from './Footer.module.css'
import { FooterProps } from './Footer.props'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, style.footer)} {...props}>
      <div>Rating © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  )
}
