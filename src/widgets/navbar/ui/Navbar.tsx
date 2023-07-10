import { FC } from 'react'
import { Link } from 'react-router-dom'
import cls from './Navbar.module.scss'

interface NavbarProps {
  title?: 'Men' | 'Women'
  navItems: {
    label: string
    url: string
  }[]
}

export const Navbar: FC<NavbarProps> = ({ title, navItems }) => {
  return (
    <>
      <div className={cls.navbar}>
        {title && <h2 className={cls.title}>{title}</h2>}
        <nav className={cls.nav}>
          <ul className={cls.list}>
            {navItems.map((item) => (
              <li className={cls.item} key={item.label}>
                <Link className={cls.link} to={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
