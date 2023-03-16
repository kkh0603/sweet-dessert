import React from "react";
import Styled from "./card.module.css"
import { standardItem } from '../../../../redux/store_component/order';

interface CardItem extends standardItem {
  itemType: string;
}

export const Card = ({id, pName, price, itemType}: CardItem)=> {

  let a = 123
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
        <div className={Styled.card_btn_container}>
          <span className={Styled.card_item_count}>{'00'}</span>
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          <button className={Styled.card_get_cart}>get cart</button>
        </div>
      </div>
    </React.Fragment>
  )
}