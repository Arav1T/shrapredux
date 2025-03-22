import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    onShow: false
}
const GeneralSlice = createSlice({
    name:"general",
    initialState,
    reducers:{
        setCartShow:(state)=>{
            state.onShow= !state.onShow
        }
    }
})
export const { setCartShow } = GeneralSlice.actions
export default GeneralSlice