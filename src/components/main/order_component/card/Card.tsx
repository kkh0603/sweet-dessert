/* eslint-disable */
import React, {useState} from "react";
import Styled from "./card.module.css"
import { itemDecrCounting, itemIncrCounting, standardItem } from '../../../../redux/store_component/order';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { cartAdd } from "../../../../redux/store_component/cart";

interface CardItem extends standardItem {
  itemType: string;
}

interface AddCardItem extends CardItem {
  pageNum : number,
  itemNum : number,
}

export const Card = ({ pName, price, itemType, count, pageNum, itemNum}: AddCardItem)=> {


  const dispatch = useDispatch();
  const itemList = useSelector((state:RootState) =>  state.cards.itemValues[pageNum][itemNum][itemType])
  let selectItemState : string = `${itemType},${pageNum},${itemNum}`;
  return (
    <React.Fragment>
      <div className={Styled.card_container}>
        <h2 className={Styled.card_title}>
          {`${pName.toUpperCase()} ${itemType.toUpperCase()}`}
        </h2>
        <div className={Styled.card_image_Area}>
          <img  className={Styled.card_image} src={process.env.PUBLIC_URL + `/item/${itemType}/${pName}.png`} alt="in"/>
        </div>
        <div className={Styled.card_cost}>
          <span>₩ : {price}</span>
        </div>
        <div className={Styled.card_quantity}>
          <span className={Styled.card_item_count}>수량 : 
            <span>{count.toString().padStart(2,'0')}</span>
          </span>
          <button className={Styled.card_item_cntBtn}
                  onClick={()=>{
                    count < 99 ? dispatch(itemIncrCounting(selectItemState)) : null}} >+</button>
          <button className={Styled.card_item_cntBtn}
                  onClick={()=>{
                    count > 0 ? dispatch(itemDecrCounting(selectItemState)) : null}}>-</button>
        </div>
        <div>
          <button className={Styled.card_get_cart}
                  onClick={()=>{                               //수량 없음 메시지 필요
                    count !== 0 ? dispatch(cartAdd(itemList)) : null}}>get cart</button>
        </div>
      </div>
    </React.Fragment>
  )
}