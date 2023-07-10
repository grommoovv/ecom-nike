import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'
import axios from 'axios'

const API_COLLECTION = process.env.REACT_APP_API_COLLECTION

export const getOneProduct = createAsyncThunk<
  IProduct,
  IProduct['title'],
  { rejectValue: string }
>('product/getOneProduct', async function (title, { rejectWithValue }) {
  try {
    const res = await axios.get(`${API_COLLECTION}/${title}`)

    const product = await res.data
    console.log(product)

    return product
  } catch (error: unknown) {
    return rejectWithValue('Failed to load product. Try again...')
  }
})
