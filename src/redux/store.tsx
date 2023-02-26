/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import operateReducer from './store_component/operate'



export const store = configureStore ({
  reducer: { 
    operatePath : operateReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type OperateDispatch = typeof store.dispatch
