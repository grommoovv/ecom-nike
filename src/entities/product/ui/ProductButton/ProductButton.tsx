/* eslint-disable indent */
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import cls from './ProductButton.module.scss'
import { productSelector } from 'entities/product/model/selectors/productSelector'
import { IProduct } from 'entities/product/model/types/product.interface'
import { toggleAddToCart } from 'entities/cart/model/slice/cartSlice'
import { toggleAddToFav } from 'entities/favorites/model/slice/favoritesSlice'

interface ProductButtonProps {
  product: IProduct
  to: 'cart' | 'favorites'
}

export const ProductButton: FC<ProductButtonProps> = ({ to, product }) => {
  const dispatch = useAppDispatch()
  // const product = useAppSelector(productSelector) as IProduct

  const { cartList: cart } = useAppSelector((s) => s.cart)
  const { favList: fav } = useAppSelector((s) => s.favorites)

  // const inCart =
  //   product && cart ? cart.some((i: any) => i.id === product.id) : null
  // const inFav =
  //   product && fav ? fav.some((i: any) => i.id === product.id) : null

  // const buttonCartText = inCart ? 'Remove from Cart' : 'Add to Cart'
  // const buttonFavText = inFav ? 'Remove from Favorites' : 'Add to Favorites'

  switch (to) {
    case 'cart':
      return (
        <>
          <button
            className={`${cls.button} ${cls._fill}`}
            onClick={() => dispatch(toggleAddToCart(product))}
          >
            {`Add to Cart`}
          </button>
        </>
      )
    case 'favorites':
      return (
        <>
          <button
            className={`${cls.button} ${cls._stroke}`}
            onClick={() => dispatch(toggleAddToFav(product))}
          >
            {`Add to Favorites`}
          </button>
        </>
      )

    default:
      return <></>
  }
}
