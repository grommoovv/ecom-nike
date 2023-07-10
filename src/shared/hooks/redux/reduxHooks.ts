import {
  AppDispatch,
  RootState,
} from 'app/providers/StoreProvider/config/store'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
