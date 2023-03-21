import React, { useEffect, useState } from 'react';
import Styled from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { cartDecreUpdate, cartIncreUpdate } from '../../../redux/store_component/cart';

export const Cart = () => {

  const dispatch = useDispatch();
  const itemList = useSelector((state: RootState) => state.cart.cartList)
  const itemValue = Object.values(itemList)
  const [totalCost, setTotalCost] = useState<number>(0)
  

  useEffect(()=>{

  }, [dispatch]);

  return(
    <React.Fragment>
      <div className={Styled.cart_contents}>
        <div className={Styled.cart_list_area}>
          <div className={Styled.cart_item_lap}>
          {
            itemValue.map((e, i) => {
              let itemTitle = e.id[0] === 'p' ? 'pudding' : null
              return (
                <div key={i} className={Styled.cart_in_item}>
                  <div className={Styled.cart_img_area}>
                    <img src={process.env.PUBLIC_URL+ `/item/${itemTitle}/${e.pName}.png`} 
                      alt={e.id} className={Styled.cart_item_img}/>
                  </div>
                  <div className={Styled.cart_item_title}>
                    <div>
                      <h4> {`${e.pName.toUpperCase()} ${itemTitle?.toUpperCase()}`} </h4>
                    </div>
                    <div className={Styled.item_cost_infor}>
                      <p> - per piece </p>
                      <span> ₩  {e.price} </span>
                    </div>
                  </div>
                  <div className={Styled.cart_item_count}>
                    quntity : { e.count.toString().padStart(2,'0') }
                    <div>
                      <button className={Styled.cart_item_cntBtn}
                              onClick={()=> {
                                dispatch(cartIncreUpdate(e.id))}}>+</button>
                      <button className={Styled.cart_item_cntBtn}
                              onClick={()=>{
                                dispatch(cartDecreUpdate(e.id))}}>-</button>
                    </div>
                  </div>
                  <div className={Styled.cart_item_total}>
                    <p> total </p>
                    <span className={Styled.item_KRW} >₩ : </span>
                    <span>{ e.count * e.price}</span>
                  </div>
                  <div>
                    <button className={Styled.cart_item_delete}>X</button>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className={Styled.cart_payment_area}>
        Payment {totalCost}

        </div>
      </div>
    </React.Fragment>
  )
}