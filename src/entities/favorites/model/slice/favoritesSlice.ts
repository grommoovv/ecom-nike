import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'

interface IFavoritesState {
  data: IProduct[]
  totalCount: number
}

const initialState: IFavoritesState = {
  data: [],
  totalCount: 0,
}

const NAME = 'FAVORITES'

export const favoritesSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    toggleAddToFavorites(state, action: PayloadAction<IProduct>) {
      const item = action.payload
      if (state.data.some((i) => i.id === item.id)) {
        const idx = state.data.findIndex((i) => i.id === item.id)
        if (idx !== -1) {
          state.data.splice(idx, 1)
        }
      }
      state.data.push(item)
    },
    addToFavorites() {},
    deleteFromFavorites() {},
  },
})

export const { toggleAddToFavorites, addToFavorites, deleteFromFavorites } = favoritesSlice.actions
