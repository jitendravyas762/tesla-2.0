import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
    name:"count",
    initialState:{value:0},
    reducers:{
        inc(state){
            state.value += 1

        },
        dec(state){
            state.value -=1

        }

    }
})
export const {inc,dec}=counterSlice.actions
export default counterSlice.reducer