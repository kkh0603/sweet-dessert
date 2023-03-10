import React from "react";
import Styled from './order.module.css'
import { Card } from "./card/Card";


export const Order = () => {


  return (
    <React.Fragment>
      <div className={Styled.order_contents}>

        <div className={Styled.order_items_list}>
          <div className={Styled.order_item}> <Card  /> </div>
          <div className={Styled.order_item}> 상품 2 </div>
          <div className={Styled.order_item}> 상품 3 </div>
          <div className={Styled.order_item}> 상품 4 </div>
        </div>
        <div className={Styled.order_pagenation}>
          <div className={`${Styled.carousel} ${Styled.carousel_left}`}> {"<"} </div>
          <div className={`${Styled.carousel} ${Styled.carousel_no}`}> 1,2,3,4,5,6 </div>
          <div className={`${Styled.carousel} ${Styled.carousel_right}`}> {">"} </div>
        </div>

      </div>

      
    </React.Fragment>
  )
}