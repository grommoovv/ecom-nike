/* eslint-disable @typescript-eslint/no-redeclare */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getProducts } from '../thunks'
import { Product, Cart } from '../../types'

type StatusType = 'idle' | 'loading' | 'fulfilled' | 'rejected'
type ErrorType = string | undefined

interface ProductState {
  data: Product[]
  status: StatusType
  error: ErrorType
}
interface CartState {
  data: Cart[]
  itemsCount: number
}

const productState: ProductState = {
  data: [],
  status: 'idle',
  error: undefined,
}

const productSlice = createSlice({
  name: 'PRODUCT',
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {})
      .addCase(getProducts.fulfilled, (state, action) => {})
      .addCase(getProducts.rejected, (state, action) => {})
  },
})

const cartState: CartState = {
  data: [],
  itemsCount: 0,
}

const cartSlice = createSlice({
  name: 'CART',
  initialState: cartState,
  reducers: {
    toggleItem(state, action: PayloadAction<Product>) {
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

    inc(state, action: PayloadAction<Cart>) {
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

    dec(state, action: PayloadAction<Cart>) {
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

const { toggleItem, inc, dec } = cartSlice.actions

export { productSlice, cartSlice }
export { toggleItem, inc, dec }
