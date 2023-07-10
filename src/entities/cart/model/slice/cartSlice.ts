import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'

export interface ICart extends IProduct {
  quantity: number
}

interface ICartState {
  cartList: ICart[]
}

const initialState: ICartState = {
  cartList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleAddToCart(state, action: PayloadAction<IProduct>) {
      const item = action.payload

      const newItem = {
        ...item,
        quantity: 1,
      }

      if (state.cartList.some((i) => i.id === newItem.id)) {
        const idx = state.cartList.findIndex((i) => i.id === newItem.id)
        if (idx !== -1) state.cartList.splice(idx, 1)
      } else state.cartList.push(newItem)
    },

    // Increment
    inc(state, action: PayloadAction<ICart>) {
      const { cartList } = state
      const quantityToAdd = action.payload

      const itemIndex = cartList.findIndex(
        (item) => item.id === quantityToAdd.id
      )
      if (itemIndex !== -1) {
        const newItem = {
          ...cartList[itemIndex],
          quantity: cartList[itemIndex].quantity + 1,
        }
        cartList.splice(itemIndex, 1, newItem)
      }
    },

    // Decrement
    dec(state, action: PayloadAction<ICart>) {
      const { cartList } = state
      const quantityToRemove = action.payload

      const itemIndex = cartList.findIndex(
        (item) => item.id === quantityToRemove.id
      )
      if (itemIndex !== -1) {
        if (cartList[itemIndex].quantity > 1) {
          const newItem = {
            ...cartList[itemIndex],
            quantity: cartList[itemIndex].quantity - 1,
          }
          cartList.splice(itemIndex, 1, newItem)
        } else {
          cartList.splice(itemIndex, 1)
        }
      }
    },
  },
})

export const { toggleAddToCart, inc, dec } = cartSlice.actions
