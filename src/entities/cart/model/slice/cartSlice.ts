import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'

export interface ICart extends IProduct {
  quantity: number
}

interface ICartState {
  data: ICart[]
  totalCount: number
}

const initialState: ICartState = {
  data: [],
  totalCount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleAddToCart(state, action: PayloadAction<IProduct>) {
      const newItem = {
        ...action.payload,
        quantity: 1,
      }

      if (state.data.some((i) => i.id === newItem.id)) {
        const idx = state.data.findIndex((i) => i.id === newItem.id)
        if (idx !== -1) state.data.splice(idx, 1)
      }
      state.data.push(newItem)
    },

    // Increment
    inc(state, action: PayloadAction<ICart>) {
      const { data } = state
      const quantityToAdd = action.payload

      const itemIndex = data.findIndex((item) => item.id === quantityToAdd.id)
      if (itemIndex !== -1) {
        const newItem = {
          ...data[itemIndex],
          quantity: data[itemIndex].quantity + 1,
        }
        data.splice(itemIndex, 1, newItem)
      }
    },

    // Decrement
    dec(state, action: PayloadAction<ICart>) {
      const { data } = state
      const quantityToRemove = action.payload

      const itemIndex = data.findIndex((item) => item.id === quantityToRemove.id)
      if (itemIndex !== -1) {
        if (data[itemIndex].quantity > 1) {
          const newItem = {
            ...data[itemIndex],
            quantity: data[itemIndex].quantity - 1,
          }
          data.splice(itemIndex, 1, newItem)
        } else {
          data.splice(itemIndex, 1)
        }
      }
    },
  },
})

export const { toggleAddToCart, inc, dec } = cartSlice.actions
