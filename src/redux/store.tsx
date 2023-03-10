/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import operateReducer from './store_component/operate'
import cardsReducer from './store_component/order';


export const store = configureStore ({
  reducer: { 
    operatePath : operateReducer,
    cards : cardsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type OperateDispatch = typeof store.dispatch
