import { PropsWithChildren, DOMAttributes, MouseEventHandler } from 'react';
import cls from 'classnames'
import './Button.scss'

export type ButtonType = 'button' | 'submit' | 'reset'
interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  classname?: string
  disabled?: boolean
  type?: ButtonType
  onClick?: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({ children, classname, disabled = false, type = 'button', ...rest }: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={cls('Button', [classname], {
        'Button__isDisabled': disabled
      })}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
