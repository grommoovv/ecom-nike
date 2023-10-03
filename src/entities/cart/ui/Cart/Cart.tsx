import { useAppSelector } from '../../../../shared/hooks'
import CartCheckout from '../CartCheckout/CartCheckout'
import { CartList } from '../CartList/CartList'
import cls from './Cart.module.scss'

export const Cart = () => {
  const { length } = useAppSelector((s) => s.CART.data)

  return (
    <>
      <div className={cls.cart}>
        {length ? (
          <>
            <div className={cls.body}>
              <h1 className={cls.title}>Your Cart</h1>
              <CartList />
            </div>
            <div className={cls.aside}>
              <CartCheckout />
            </div>
          </>
        ) : (
          <div className={cls.empty}>
            <h1 className={cls.title}>Your Cart is Empty</h1>
            <p>You have not added any products to your cart yet</p>
          </div>
        )}
      </div>
    </>
  )
}
