import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'
import { getProduct } from '../thunk/productThunk'

export interface IProductState {
  product: IProduct | null
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected'
  error: unknown | null
}

const initialState: IProductState = {
  product: null,
  status: 'idle',
  error: null,
}

const NAME = 'PRODUCT'

export const productSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.product = action.payload
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  },
})
