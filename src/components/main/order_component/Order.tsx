import React, {  } from "react";
import Styled from './order.module.css'
import { Card } from "./card/Card";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


export const Order = () => {

  
  const cardList = useSelector((state : RootState) => state.cards)
  const allCheck : boolean = Object.keys(cardList.itemList).length === 1 ? true : false

  

  return (
    <React.Fragment>
      <div className={Styled.order_contents}>

        <div className={Styled.order_items_list}>
          {
            allCheck === true ? (
              cardList.itemList[`${cardList.itemKeys}`].map((a: { id: number; pName: string; price: number; }, i: React.Key | null | undefined) => {
                let propTitle : string = cardList.itemKeys.toString();
                // console.log(a)
                return (
                  <div key={i} className={Styled.order_item}> 
                    <Card itemName={propTitle} itemInfor={a}/>
                  </div>
                )
              })
            ) : null
          }

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