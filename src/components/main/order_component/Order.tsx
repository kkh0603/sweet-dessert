import React, { useEffect } from "react";
import Styled from './order.module.css'
import { Card } from "./card/Card";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


export const Order = () => {

  
  const orderItem = useSelector((state : RootState) => state.cards.items.type)
  const categoryNo = useSelector((state : RootState) => state.operatePath.category)
  let subMenu = orderItem[categoryNo].submenu.toString();
  let item = orderItem[categoryNo].item;
  let itemList : { [key : string] : Array<object> }= {}
  
  if (orderItem[categoryNo].no !== 0){
    itemList[subMenu] = item
    console.log(itemList)
  }

  
  return (
    <React.Fragment>
      <div className={Styled.order_contents}>

        <div className={Styled.order_items_list}>
          <div className={Styled.order_item}> <Card /> </div>
          <div className={Styled.order_item}> 상품 2 </div>
          <div className={Styled.order_item}> 상품 3 </div>
          <div className={Styled.order_item}> 상품 4 </div>
        </div>
        {/* {
          itemList.map((a,i) =>{
            console.log(a)
            return(
              <div key={i}></div>
            )
          })
        } */}
        <div className={Styled.order_pagenation}>
          <div className={`${Styled.carousel} ${Styled.carousel_left}`}> {"<"} </div>
          <div className={`${Styled.carousel} ${Styled.carousel_no}`}> 1,2,3,4,5,6 </div>
          <div className={`${Styled.carousel} ${Styled.carousel_right}`}> {">"} </div>
        </div>
      </div>
    </React.Fragment>
  )
}