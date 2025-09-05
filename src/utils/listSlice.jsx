import { createSlice } from "@reduxjs/toolkit";

const listSlice= createSlice({
    name:"list",
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addTask} = listSlice.actions
export default listSlice.reducer;