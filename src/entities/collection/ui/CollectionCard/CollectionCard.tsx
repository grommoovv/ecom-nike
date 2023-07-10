import { FC } from 'react'
import { IProduct } from 'entities/product/model/types/product.interface'
import { Link } from 'react-router-dom'
import { toUSD } from 'shared/libs/formats/toUSD'
import cls from './CollectionCard.module.scss'

interface CollectionCardProps {
  details: IProduct
}

const CollectionCard: FC<CollectionCardProps> = ({ details }) => {
  const linkURL = `/collection/${details.title}`

  return (
    <>
      <div className={cls.card}>
        <Link className={cls.link} to={linkURL}>
          <div className={cls.card__wrapper}>
            <div className={cls.imageWrap}>
              <img
                className={cls.image}
                src={details.image}
                alt={details.title}
              />
            </div>
            <div className={cls.details}>
              <div className={cls.title}>{details.title}</div>
              <div className={cls.collection}>Collection Shoes</div>
              <div className={cls.colour}>1 Colour</div>
              <div className={cls.price}>{toUSD.format(details.price)}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
export default CollectionCard
