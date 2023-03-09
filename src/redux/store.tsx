/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import operateReducer from './store_component/operate'
import cardSlice from './store_component/cart';



export const store = configureStore ({
  reducer: { 
    operatePath : operateReducer,
    cards : cardSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type OperateDispatch = typeof store.dispatch
