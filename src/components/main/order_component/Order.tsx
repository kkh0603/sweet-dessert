import React, { useState } from "react";
import Styled from './order.module.css'
import { Card } from "./card/Card";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


export const Order = () => {

  const [pageNo, setPageNo] = useState(0)
  
  const cardList = useSelector((state : RootState) => state.cards)
  console.log(cardList.itemValues)

  return (
    <React.Fragment>
      <div className={Styled.order_contents}>

        <div className={Styled.order_items_list}>
          {
          }

        </div>
        <div className={Styled.order_pagenation}>
          <div className={`${Styled.carousel} ${Styled.carousel_left}`}> {"<"} </div>
          {

          }
          <div className={`${Styled.carousel} ${Styled.carousel_no}`}> 1,2,3,4,5,6 </div>
          <div className={`${Styled.carousel} ${Styled.carousel_right}`}> {">"} </div>
        </div>
      </div>
    </React.Fragment>
  )
}