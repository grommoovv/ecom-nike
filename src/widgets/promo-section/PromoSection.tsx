import { FC } from 'react'
import { IPromo } from '../../shared/assets'
import { PromoCard } from '../../shared/ui'
import cls from './PromoSection.module.scss'

interface PromoSectionProps {
  title: 'Your Seasonal Shop' | 'Summer To Shine' | 'Discover Our Apps'
  details: IPromo[]
}

export const PromoSection: FC<PromoSectionProps> = ({ title, details }) => {
  return (
    <>
      <div className={cls.promo}>
        <h2 className={cls.title}>{title}</h2>
        <div className={cls.content}>
          {details.map((item) => (
            <PromoCard details={item} key={item.title} />
          ))}
        </div>
      </div>
    </>
  )
}
