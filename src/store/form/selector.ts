import { createSelector } from '@reduxjs/toolkit'

const selectForm = (state: TRootState) => state.todolist

export const getTodo = createSelector(selectForm, (state: TRootState) => state, {
    devModeChecks: { identityFunctionCheck: 'never' },
})