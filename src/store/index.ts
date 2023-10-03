import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { cartSlice, productSlice } from './features'

const rootReducer = combineReducers({
  [productSlice.name]: productSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { AppState, AppDispatch }

export { store }
