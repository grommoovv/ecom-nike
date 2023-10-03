import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export { useAppDispatch, useAppSelector }
