import { cartSelector } from 'entities/cart'
import { useAppSelector } from 'shared/hooks'
import CartCard from '../CartCard/CartCard'

import cls from './CartList.module.scss'

export const CartList = () => {
  const data = useAppSelector(cartSelector)
  return (
    <>
      {data && (
        <div className={cls.items}>
          {data.map((item) => (
            <ul>
              <li>
                <CartCard details={item} key={item.id} />
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  )
}
