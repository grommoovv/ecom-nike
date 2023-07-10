import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'
import { getOneProduct } from '../service/getOneProduct'

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

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneProduct.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.product = action.payload
        state.error = null
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  },
})
