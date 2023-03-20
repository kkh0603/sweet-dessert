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
        <div className={Styled.cart_table_area}>
          <table className={Styled.cart_table}>
            <thead>
              <tr className={Styled.thead_title}>
                <th> 상품 </th>
                <th> 개수 </th>
                <th> 금액 </th>
                <th>     </th>
              </tr>
            </thead>
            {
              itemValue.map((e, i) => {
                let itemType :string = e.id[0]==='p' ? 'pudding' : '';

                return (
                  <tbody key={i}>
                    <tr className={Styled.cart_in_item}>
                        <td className={Styled.img_title_infor}> 
                          <div className={Styled.table_body_item}>
                            <span>
                              <img 
                                className={Styled.cart_item_img}
                                src={process.env.PUBLIC_URL + `/item/${itemType}/${e.pName}.png`} 
                                alt='item_custard'/>
                            </span>
                            <span>
                              <h4 className={Styled.titleName}> {`${e.pName.toUpperCase()} ${itemType.toUpperCase()}`} </h4>
                              <div className={Styled.costInfor}>
                                <p> per piece</p>
                                <p> 
                                  <span> ₩ </span>
                                  <span> {e.price} </span>
                                </p>
                              </div>
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className={Styled.table_body_amount}>
                            <div>
                              <button>-</button>
                              <span> {e.count} </span>
                              <button>+</button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className={Styled.table_body_item_cost}>
                            <div>
                              <span> ₩ </span>
                              <span> {e.price * e.count} </span>
                            </div>
                          </div>
                        </td>
                        <th>
                          <button> X </button>
                        </th>
                    </tr>
                  </tbody>
                )
              })
            }
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