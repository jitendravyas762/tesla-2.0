import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchData = createAsyncThunk("fetchAsyncProducts", async () => {
//     const response = await axios.get("https://fakestoreapi.com/products")
//     console.log(response.data)
//     return response.data;
    
    
// })

export const fetchData = createAsyncThunk("fetchasyncproducts",async ()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    return response.data
})


export const ThunkSlice=createSlice({
    name:"Thunk",
    initialState:{
        fetchproduct:[],
        isLoding:false,
        isError:false
    },
    reducers:{
        fetchproducts:(state)=>{}

    },
    extraReducers:{
        [fetchData.pending]:(state)=>{
            state.isLoding=true

        },
        [fetchData.fulfilled]:(state,action)=>{
            console.log(action.payload)
            state.isLoding=false
            state.fetchproduct=action.payload

        },
        [fetchData.rejected]:(state)=>{
            state.isError=true
        }
    }
})
export const{ fetchproducts}=ThunkSlice.actions;
export default ThunkSlice.reducer;