import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'entities/product/model/types/product.interface'

interface IFavState {
  favList: IProduct[]
}

const initialState: IFavState = {
  favList: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleAddToFav(state, action: PayloadAction<IProduct>) {
      const newItem = action.payload

      if (state.favList.some((i) => i.id === newItem.id)) {
        const idx = state.favList.findIndex((i) => i.id === newItem.id)
        if (idx !== -1) state.favList.splice(idx, 1)
      } else state.favList.push(newItem)
    },
  },
})

export const { toggleAddToFav } = favoritesSlice.actions
