import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../../api'
import { Product } from '../../types'

let errorMessage = 'Failed to load data'
const thunkName = 'PRODUCT/getProducts'

const getProducts = createAsyncThunk<Product, undefined, { rejectValue: string }>(
  thunkName,
  async function (_, { rejectWithValue }) {
    try {
      return await ApiService.getProducts()
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message
      }
      return rejectWithValue(errorMessage)
    }
  }
)

export { getProducts }
