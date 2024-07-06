"use client"
import { combineReducers, createAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
    loader : false
}


const loader = createSlice({
    name : 'loader',
    initialState,
    reducers : {
        setLoader(state,action) {
            state.loader = action.payload
        }
    }
    
})

export const {setLoader} = loader.actions;
export default loader.reducer