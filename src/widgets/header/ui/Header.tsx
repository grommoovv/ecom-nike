import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as JordanIcon } from 'shared/assets/icons/icon-jordan.svg'
import { ReactComponent as ConverseIcon } from 'shared/assets/icons/icon-converse.svg'
import { ReactComponent as LogoIcon } from 'shared/assets/icons/icon-logo.svg'
import { ReactComponent as CartIcon } from 'shared/assets/icons/icon-cart.svg'
import { ReactComponent as FavIcon } from 'shared/assets/icons/icon-fav.svg'

import { PAGES } from '../data/header.data'

import { routePath } from 'shared/config'
import { Navbar } from 'widgets/navbar'
import cls from './Header.module.scss'

const utils = [
  {
    icon: <FavIcon />,
    url: routePath.favorites,
  },
  {
    icon: <CartIcon />,
    url: routePath.cart,
  },
]

export const Header = memo(() => {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.preHeader}>
          <div className={cls.preHeader__wrapper}>
            <div className={cls.promo}>
              <JordanIcon />
              <ConverseIcon />
            </div>
          </div>
        </div>

        <div className={cls.header__wrapper}>
          <div className={cls.header__i}>
            <div className={cls.logo}>
              <Link to={'/'}>
                <LogoIcon />
              </Link>
            </div>

            <Navbar navItems={PAGES} />

            <div className={cls.utils}>
              <ul className={cls.utils__list}>
                {utils.map((util) => (
                  <li className={cls.utils__item} key={util.url}>
                    <Link className={cls.utils__link} to={util.url}>
                      {util.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
})
