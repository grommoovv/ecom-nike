import { createAsyncThunk } from '@reduxjs/toolkit'
import { CollectionService } from '../../api/'
import { IProduct } from 'entities/product/model/types/product.interface'

let errorMessage = 'Failed to load data'
const thunkName = 'collection/getCollection'

export const getCollection = createAsyncThunk<IProduct[], undefined, { rejectValue: string }>(
  thunkName,
  async function (_, { rejectWithValue }) {
    try {
      return await CollectionService.getCollection()
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorMessage = error.message
      }
      return rejectWithValue(errorMessage)
    }
  }
)
