import { configureStore } from "@reduxjs/toolkit";
// import counterslice from "../features/counterfeature/counterslice";
import ThunkSlice from "../features/Thunkaxios/ThunkSlice";


export default configureStore({
    reducer:{
        // count:counterslice
        Thunk:ThunkSlice

    }
});