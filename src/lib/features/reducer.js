"use client"
import { combineReducers } from "@reduxjs/toolkit"

import cart from "./cart"
import products from "./products"
import loader from "./loader"

const rootReducer = combineReducers({
    cart,
    products,
    loader


})

export default rootReducer