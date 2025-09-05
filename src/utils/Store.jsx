import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import CartReducer from "./CartSlice"
const Store = configureStore({
    reducer:{
        cart:CartReducer,
    }
    
})
export default Store;