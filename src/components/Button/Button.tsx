import cn from 'classnames'
import style from './Button.module.css'
import { ButtonProps } from './Button.props'

export const Button = ({
  children,
  appearance,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(style.button, className, {
        [style.primary]: appearance == 'primary',
        [style.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
