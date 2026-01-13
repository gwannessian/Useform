import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: IUserState = {
    user: null,
    authenticated: false,
    showPass:false
}


const formSlice = createSlice ({
    name:"form",
    initialState,
    reducers:{
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.authenticated = true
        },
        toggleShowPass:(state) => {
            state.showPass = !state.showPass
        }
    },
})


export const {setUser,toggleShowPass} = formSlice.actions
export const formInputReducer = formSlice.reducer
