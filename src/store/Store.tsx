import { configureStore } from "@reduxjs/toolkit";
import GeneralSlice from "../slices/GeneralSlice";
import CartSlice from "../slices/CartSlice";

export const store = configureStore({
    reducer:{
        uiSlice: GeneralSlice.reducer,
        CartSlice: CartSlice.reducer
    }
})