import React from 'react';
import Styled from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export const Cart = () => {

  const dispatch = useDispatch();
  const itemList = useSelector((state: RootState) => state.cart.cartList)
  const itemValue = Object.values(itemList)

  return(
    <React.Fragment>
      <div className={Styled.cart_contents}>
        <div className={Styled.cart_list_area}>
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
                    <h4> {`${e.pName.toUpperCase()} ${itemTitle?.toUpperCase()}`} </h4>
                    <div className={Styled.item_cost_infor}>
                      <p> - per piece </p>
                      <span> ₩  {e.price} </span>
                    </div>
                  </div>
                  <div className={Styled.cart_item_count}>
                    { e.count.toString().padStart(2,'0') }
                    <div>
                      <button>+</button>
                      <button>-</button>
                    </div>
                  </div>
                  <div className={Styled.cart_item_total}>
                    <p> total </p>
                    <span>₩ : </span>
                    <span>{ e.count * e.price}</span>
                    <button className={Styled.cart_item_delete}>X</button>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
}