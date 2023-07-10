import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from 'entities/cart/model/slice/cartSlice'
import { collectionSlice } from 'entities/collection/model/slice/collectionSlice'
import { favoritesSlice } from 'entities/favorites'
import { productSlice } from 'entities/product'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  [collectionSlice.name]: collectionSlice.reducer,
  [productSlice.name]: productSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
// export default store

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
