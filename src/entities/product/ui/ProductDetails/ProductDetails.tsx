import { useAppSelector } from 'shared/hooks'
import { toUSD } from 'shared/libs/formats/toUSD'

import cls from './ProductDetails.module.scss'
import { ProductButton } from '../ProductButton/ProductButton'
import { productSelector } from 'entities/product/model/selectors/productSelector'
import { IProduct } from 'entities/product/model/types/product.interface'
import { FC } from 'react'

interface ProductDetailsProps {
  data: IProduct
}

export const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
  // const product = useAppSelector(productSelector) as IProduct

  return (
    <>
      <div className={cls.details}>
        <h1 className={cls.title}>{data.title}</h1>
        <div className={cls.price}>{toUSD.format(data.price)}</div>
        <div className={cls.actions}>
          <ProductButton product={data} to='cart' />
          <ProductButton product={data} to='favorites' />
        </div>
        <div className={cls.description}>{data.description}</div>
      </div>
    </>
  )
}
