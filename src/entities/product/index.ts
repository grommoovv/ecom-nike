import { productSlice } from './model/slice/productSlice'
import { getOneProduct } from './model/thunk/productThunk'

import { Product } from './ui/Product'
import { productSelector } from './model/selector/selectProduct'

export { Product, productSlice, getOneProduct, productSelector }
