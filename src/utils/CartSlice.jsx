import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[],
        totalAmount:0,
        totalQuantity:0

    },
    reducers:{
        AddItems:(state , action)=>{
            const obj = action.payload
        const existingItem = state.items.find((item)=>{
            item.id == obj.id && item.color == obj.color && item.size== obj.size
        })
        if(existingItem){
            state.totalAmount += action.payload.price
            state.totalQuantity += 1
        }
        state.items.push(action.payload);
        state.totalAmount += obj.price * obj.quantity;
        state.totalQuantity ++
            
        },
        Increasequantity:(state , action)=>{
            // console.log(action.payload);
            const {id , pQuantity} = action.payload;
            const itemToIncrease = state.items.find((item)=>item.id === id)
           
           
            

        },
        RemoveItem:(state , action)=>{
            const id = action.payload
            // console.log("items", state);
            // console.log(action.payload);
            
            
              state.items = state.items.filter((item)=>{
            item.id !== id;
        })
        }
    }

    
})
export const {AddItems , RemoveItem , Increasequantity} = CartSlice.actions;
export default CartSlice.reducer;