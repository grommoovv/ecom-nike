import { FC } from 'react'
import { IProduct } from 'entities/product/model/types/product.interface'
import { toggleAddToFav } from 'entities/favorites/model/slice/favoritesSlice'
import { useAppDispatch } from 'shared/hooks'
import { toUSD } from 'shared/libs/formats/toUSD'

import cls from './FavoritesCard.module.scss'

interface FavovitesCardProps {
  details: IProduct
}

const FavovitesCard: FC<FavovitesCardProps> = ({ details }) => {
  const { title, price, image } = details

  const dispatch = useAppDispatch()

  return (
    <>
      <div className={cls.card}>
        <div className={cls.imageWrap}>
          <img className={cls.image} src={image} alt={title} />
        </div>

        <button
          className={cls.button}
          onClick={() => dispatch(toggleAddToFav(details))}
        >
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='1.27246'
              width='17.9989'
              height='1.79989'
              rx='0.899945'
              transform='rotate(45 1.27246 0)'
              fill='black'
            />
            <rect
              y='12.7276'
              width='17.9989'
              height='1.79989'
              rx='0.899945'
              transform='rotate(-45 0 12.7276)'
              fill='black'
            />
          </svg>
        </button>

        <div className={cls.details}>
          <h2 className={cls.title}>{title}</h2>
          <div className={cls.price}>{toUSD.format(price)}</div>
        </div>
      </div>
    </>
  )
}
export default FavovitesCard
