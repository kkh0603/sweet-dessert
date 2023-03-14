import React from "react";
import Styled from "./card.module.css"
import { CardProps } from "../../../../redux/store_component/order";


export const Card = ({ itemName, itemInfor } : CardProps )=> {



  return (
    <React.Fragment>
      <div className={Styled.card_container}>
        <h2 className={Styled.card_title}>
          { `${itemInfor.pName.toUpperCase()} ${itemName.toUpperCase()}` }
        </h2>
        <div className={Styled.card_image_Area}>
          <img  className={Styled.card_image} src={process.env.PUBLIC_URL + `/item/${itemName}/${itemInfor.pName}.png`} alt="in"/>
        </div>
        <div className={Styled.card_cost}>
          <span>₩</span>
        </div>
        <div className={Styled.card_btn_container}>
          <span className={Styled.card_item_count}>{'00'}</span>
          <button>+</button>
          <button>-</button>
          <button className={Styled.card_get_cart}>get cart</button>
        </div>
      </div>
    </React.Fragment>
  )
}