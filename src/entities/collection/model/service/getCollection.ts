import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'
import axios from 'axios'

const API_COLLECTION = process.env.REACT_APP_API_COLLECTION

export const getCollection = createAsyncThunk<
  IProduct[],
  undefined,
  { rejectValue: string }
>('collection/getCollection', async function (_, { rejectWithValue }) {
  try {
    if (API_COLLECTION) {
      const res = await axios.get(API_COLLECTION)
      const collection = await res.data
      return collection
    }
  } catch (error: unknown) {
    return rejectWithValue('Failed to load products. Try again...')
  }
})
