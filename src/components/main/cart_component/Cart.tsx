import React from 'react';
import Styled from './cart.module.css'

export const Cart = () => {
  return(
    <React.Fragment>
      <div className={Styled.cart_contents}>
        <div className={Styled.cart_table_area}>
          <table className={Styled.cart_table}>
            <thead>
              <tr className={Styled.thead_title}>
                <th> 상품 </th>
                <th> 개수 </th>
                <th> 금액 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 
                  <div className={Styled.table_body_item}>
                    <span>
                      <img 
                        className={Styled.cart_item_img}
                        src={process.env.PUBLIC_URL + '/item/custard.png'} 
                        alt='item_custard'/>
                    </span>
                    <span>
                      <h4> 커스타드 </h4>
                      <p> 상품 설명들..... </p>
                    </span>
                  </div>
                </td>
                <td>
                  <div className={Styled.table_body_amount}>
                    <div>
                      <button>-</button>
                      <span> 0 </span>
                      <button>+</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={Styled.table_body_item_cost}>
                    <div> ₩ {0} </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={Styled.cart_sticky_area}>
          <div className={Styled.cart_bot_content}>
            <div className={Styled.cart_bot_total}>
              <p>
                Total ₩ 1,000,000
              </p>
            </div>
            <div className={Styled.cart_bot_payment}>
              <button >주문</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}