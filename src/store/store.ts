import { configureStore } from "@reduxjs/toolkit";
import { formInputReducer } from "./form/slice"


export const store = configureStore({
    reducer: {
        form:formInputReducer
    },
});
