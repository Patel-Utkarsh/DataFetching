import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

const cart = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem(state,action) {
            const newArr = [...cart];
            newArr.push(action.payload);
            state.cart = newArr;

        },

        removeItem(state,action) {
            const newArr = state.cart.filter((item) => item.id !== action.payload);
            state.cart = newArr;
        }
    }

})

export const {addItem,removeItem} = cart.actions;
export default cart.reducer