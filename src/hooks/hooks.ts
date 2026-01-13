import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<TDispatchFn>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
