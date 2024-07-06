"use client"
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './features/reducer'

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export default makeStore