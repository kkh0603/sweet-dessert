/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import operateReducer from './store_component/operate'
import cardsReducer from './store_component/order';
import cartReducer from './store_component/cart'
import reviewReducer from './store_component/review';


export const store = configureStore ({
  reducer: { 
    operatePath : operateReducer,
    cards : cardsReducer,
    cart : cartReducer,
    review : reviewReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type OperateDispatch = typeof store.dispatch
