import { RootState } from 'app/providers/StoreProvider/config/store'

export const cartSelector = (state: RootState) => state.cart.cartList
