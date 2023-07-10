import { useEffect, useState } from 'react'
import { useAppSelector } from 'shared/hooks'

import cls from './CartCheckout.module.scss'
import { toUSD } from 'shared/libs/formats/toUSD'
import { cartSelector } from 'entities/cart'

const CartCheckout = () => {
  const data = useAppSelector(cartSelector)

  const [subtotal, setSubtotal] = useState<number>()

  useEffect(() => {
    if (data) {
      const newSubtotal = data.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
      setSubtotal(newSubtotal)
    }
  }, [data, subtotal, setSubtotal])

  const SHIPPING_PRICE = 20
  const totalPrice = subtotal ? subtotal + SHIPPING_PRICE : SHIPPING_PRICE
  const SUBTOTAL = subtotal
    ? toUSD.format(parseFloat(subtotal?.toFixed(2)))
    : null
  const TOTAL_PRICE = toUSD.format(parseFloat(totalPrice.toFixed(2)))

  return (
    <>
      <div className={cls.checkout}>
        <div className={cls.body}>
          <div className={cls.title}>Summary</div>
          <div className={cls.subtotal}>
            <span>Subtotal</span>
            <span>{SUBTOTAL}</span>
          </div>
          <div className={cls.shipping}>
            <span>Shipping</span>
            <span>{toUSD.format(SHIPPING_PRICE)}</span>
          </div>
          <div className={cls.total}>
            <span className={cls.total__title}>Total</span>
            <span>{TOTAL_PRICE}</span>
          </div>
          <div className={cls.action}>
            <button className={cls.button}>Check Out</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CartCheckout
