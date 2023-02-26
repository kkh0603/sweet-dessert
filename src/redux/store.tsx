/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import operateReducer from './store_component/operate'
import testReducer from './store_component/test';



export const store = configureStore ({
  reducer: { 
    operatePath : operateReducer,
    test1 : testReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type OperateDispatch = typeof store.dispatch
