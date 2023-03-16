import React, { useEffect, useState } from "react";
import Styled from './order.module.css'
import { Card } from "./card/Card";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


export const Order = () => {

  const [pageNo, setPageNo] = useState<number>(1)
  const cardList = useSelector((state : RootState) => state.cards)
  
  useEffect(() => {
    setPageNo(0)
  },[])
  
  return (
    <React.Fragment>
      <div className={Styled.order_contents}>

        <div className={Styled.order_items_list}>
          { 
            cardList.itemValues.length !== 0 ? 
            cardList.itemValues[pageNo].map((e ,i) => {
              let selectItem : string= Object.keys(e)[0]
              let itemMenu : string = e[selectItem].pName
              let itemNo : number = e[selectItem].id
              let itemPrice : number = e[selectItem].price

              return (
                <div key={i} className={Styled.order_item}>
                  <Card id={itemNo} price={itemPrice} pName={itemMenu} itemType={selectItem}/>
                </div>
              )
            }) :
            null
          }

        </div>
        <div className={Styled.order_pagenation}>
          <div className={`${Styled.carousel} ${Styled.carousel_left}`}
            onClick={()=>{ if (pageNo > 0) setPageNo(pageNo - 1)}}> {"<"} </div>
          {
          }
          <div className={`${Styled.carousel} ${Styled.carousel_no}`}> 1,2,3,4,5,6 </div>
          <div className={`${Styled.carousel} ${Styled.carousel_right}`}
            onClick={()=>{ if (pageNo < cardList.itemValues.length-1) setPageNo(pageNo + 1)}}> {">"} </div>
        </div>
      </div>
    </React.Fragment>
  )
}