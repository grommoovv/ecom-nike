import { FC } from 'react'
import cls from './CategoriesSection.module.scss'
import { ICategories } from '../../shared/assets'
import { CategoriesCard } from '../../shared/ui'

interface CategoriesSectionProps {
  title: 'Latest & Greatest' | 'More To Explore'
  details: ICategories[]
}

export const CategoriesSection: FC<CategoriesSectionProps> = ({ title, details }) => {
  return (
    <>
      <div className={cls.categories}>
        <h2 className={cls.title}>{title}</h2>
        <div className={cls.content}>
          {details.map((item, idx) => (
            <CategoriesCard details={item} key={idx} />
          ))}
        </div>
      </div>
    </>
  )
}
