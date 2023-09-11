import { RootState } from 'app/providers/StoreProvider/config/store'

export const selectFavorites = (state: RootState) => state.FAVORITES
