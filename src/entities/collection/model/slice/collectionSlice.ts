import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'
import { getCollection } from '../thunk/collectionThunk'
import { products } from 'products'

export interface ICollectionState {
  collection: IProduct[]
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected'
  error: string | undefined
}

const initialState: ICollectionState = {
  collection: products,
  status: 'idle',
  error: undefined,
}

const NAME = 'COLLECTION'

export const collectionSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollection.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCollection.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.collection = action.payload
      })
      .addCase(getCollection.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  },
})
