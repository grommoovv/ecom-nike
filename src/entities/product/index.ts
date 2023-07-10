import { productSlice } from './model/slice/productSlice'
import { getOneProduct } from './model/service/getOneProduct'

import { Product } from './ui/Product'
import { productSelector } from './model/selectors/productSelector'

export { Product, productSlice, getOneProduct, productSelector }
