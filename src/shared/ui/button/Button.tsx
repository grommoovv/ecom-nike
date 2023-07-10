import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button>{children}</button>
    </>
  )
}
