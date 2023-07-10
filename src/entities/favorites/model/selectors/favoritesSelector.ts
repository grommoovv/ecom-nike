import { RootState } from 'app/providers/StoreProvider/config/store'

export const favoritesSelector = (state: RootState) => state.favorites.favList
