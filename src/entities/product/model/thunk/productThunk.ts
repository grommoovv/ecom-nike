import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'
import axios from 'axios'
import { ProductService } from 'entities/product/api'

let errorMessage = 'Failed to load data'
const thunkName = 'product/getOneProduct'

export const getProduct = createAsyncThunk<IProduct, IProduct['title'], { rejectValue: string }>(
  thunkName,
  async function (title, { rejectWithValue }) {
    try {
      return await ProductService.getProduct(title)
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorMessage = error.message
      }
      return rejectWithValue(errorMessage)
    }
  }
)
