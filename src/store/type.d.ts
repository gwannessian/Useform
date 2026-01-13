type TRootState = ReturnType<typeof import('src/store').appReducer>
type TDispatchFn<state = TRootState> = import('redux-thunk').ThunkDispatch<state, ThunkExtraArg, import('redux').Action>
