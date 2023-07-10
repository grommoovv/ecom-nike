import { ProductDetails } from './ProductDetails/ProductDetails'
import { IProduct } from '../model/types/product.interface'
import { FC } from 'react'
import cls from './Product.module.scss'

interface ProductProps {
  data: IProduct
}

export const Product: FC<ProductProps> = ({ data }) => {
  return (
    <>
      <main className={cls.product}>
        {data ? (
          <div className={cls.wrapper}>
            <div className={cls.imageWrap}>
              <img className={cls.image} src={data.image} alt={data.title} />
            </div>

            <div className={cls.detailsWrap}>
              <ProductDetails data={data} />
            </div>
          </div>
        ) : (
          <div className={cls.failed}>Failed to Load Product. Try again...</div>
        )}
      </main>
    </>
  )
}
