import { FC } from 'react'
import { Link } from 'react-router-dom'

import cls from './HeroBanner.module.scss'
import { IHeroBanner } from 'shared/assets'

interface HeroBannerProps {
  details: IHeroBanner
}

export const HeroBanner: FC<HeroBannerProps> = ({ details }) => {
  const {
    title,
    subtitle,
    imageURL,
    buttonLink: btnLink,
    buttonText: btnText,
  } = details

  return (
    <>
      <div className={cls.banner}>
        <div className={cls.wrapper}>
          <div className={cls.title}>{title}</div>
          <div className={cls.subtitle}>{subtitle}</div>
          <div className={cls.action}>
            <Link className={cls.button} to={btnLink}>
              {btnText}
            </Link>
          </div>
          <div className={cls.imageWrap}>
            <img className={cls.image} src={imageURL} alt={title} />
          </div>
        </div>
      </div>
    </>
  )
}
