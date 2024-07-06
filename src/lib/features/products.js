"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : []
}

const prod = createSlice({
    name : 'products',
    initialState,
    reducers : {
        setProducts(state,action) {
            state.products  = action.payload

        }
    }
})

export const{setProducts} = prod.actions;
export default prod.reducer;