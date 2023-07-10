import { FC } from 'react'
import { useAppDispatch } from 'shared/hooks'
import { ICart, dec, inc } from 'entities/cart'
import { ReactComponent as PlusIcon } from 'shared/assets/icons/icon-plus.svg'
import { ReactComponent as MinusIcon } from 'shared/assets/icons/icon-minus.svg'
import { toUSD } from 'shared/libs/formats/toUSD'
import cls from './CartCard.module.scss'

interface CartCardProps {
  details: ICart
}

const CartCard: FC<CartCardProps> = ({ details }) => {
  const { title, price, image, quantity } = details

  const dispatch = useAppDispatch()

  const itemSum = price * quantity
  const roundedItemSum = parseFloat(itemSum.toFixed(2))

  return (
    <>
      <div className={cls.card}>
        <div className={cls.card__primary}>
          <div className={cls.card__media}>
            <img className={cls.image} src={image} alt={title} />
          </div>
          <div className={cls.details}>
            <h2 className={cls.title}>{title}</h2>
            <div className={cls.price}>{toUSD.format(price)}</div>
          </div>
        </div>

        <div className={cls.quantity}>
          <button className={cls.button} onClick={() => dispatch(dec(details))}>
            <MinusIcon />
          </button>
          <div className={cls.counter}>{quantity}</div>
          <button onClick={() => dispatch(inc(details))} className={cls.button}>
            <PlusIcon />
          </button>
        </div>
        <div className={cls.total}>{toUSD.format(roundedItemSum)}</div>
      </div>
    </>
  )
}
export default CartCard
