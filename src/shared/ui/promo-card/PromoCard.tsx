import { FC } from 'react'
import cls from './PromoCard.module.scss'
import { Link } from 'react-router-dom'
import { IPromo } from 'shared/assets'

interface PromoCardProps {
  details: IPromo
}

export const PromoCard: FC<PromoCardProps> = ({ details }) => {
  const { buttonText: text, buttonURL: link, imageURL: src, title } = details
  return (
    <>
      <div className={cls.card}>
        <div className={cls.wrapper}>
          <div className={cls.content}>
            <div className={cls.title}>{title}</div>
            <Link className={cls.button} to={link}>
              {text}
            </Link>
          </div>

          <div className={cls.imageWrap}>
            <img className={cls.image} src={src} alt={title} />
          </div>
        </div>
      </div>
    </>
  )
}
