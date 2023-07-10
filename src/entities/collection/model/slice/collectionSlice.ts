import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'
// import { getCollection } from '../service/getCollection'
import { products } from 'products'

export interface ICollectionState {
  collection: IProduct[]
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected'
  error: unknown | null
}

const initialState: ICollectionState = {
  collection: products,
  status: 'idle',
  error: null,
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCollection.pending, (state) => {
  //       state.status = 'loading'
  //       state.error = null
  //     })
  //     .addCase(getCollection.fulfilled, (state, action) => {
  //       state.collection = action.payload
  //       state.status = 'fulfilled'
  //       state.error = null
  //     })
  //     .addCase(getCollection.rejected, (state, action) => {
  //       state.status = 'rejected'
  //       state.error = action.payload
  //     })
  // },
})
