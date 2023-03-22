import React, { useEffect, useState } from 'react';
import Styled from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { cartDecreUpdate, cartDelete, cartIncreUpdate } from '../../../redux/store_component/cart';
import { PayModal } from './modal/PayModal';

export const Cart = () => {

  const dispatch = useDispatch();
  const itemList = useSelector((state: RootState) => state.cart.cartList)
  const itemValue = Object.values(itemList)
  let costPayment : number = useSelector((state: RootState) => state.cart.totalPayment)
  itemValue.map((e) => costPayment += (e.count * e.price))
  const [paymentBtn, setPaymentBtn] = useState<boolean>(false)

  useEffect(()=>{}, [dispatch]);
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
                              onClick={()=> 
                                e.count < 99 ? dispatch(cartIncreUpdate(e.id)) : null }>+</button>
                      <button className={Styled.cart_item_cntBtn}
                              onClick={()=>
                                e.count > 0 ? dispatch(cartDecreUpdate(e.id)) : null }>-</button>
                    </div>
                  </div>
                  <div className={Styled.cart_item_total}>
                    <span className={Styled.item_KRW} >₩ : </span>
                    <span>{( e.count * e.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</span>
                  </div>
                  <div className={Styled.tiem_delete_area}>
                    <button className={Styled.item_delete_btn}
                            onClick={()=> {
                              dispatch(cartDelete(e.id)) }}>X</button>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className={Styled.cart_payment_area}>
          <span>Total Cost 
            <p>₩ : {costPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          </span>
          <button className={Styled.payment_btn}
                  onClick={()=>setPaymentBtn(true)}>Payment</button>
        </div>
      </div>
      {
        paymentBtn === true ? <PayModal paymentBtn={paymentBtn} setPaymentBtn={setPaymentBtn}/> : null
      }
    </React.Fragment>
  )
}