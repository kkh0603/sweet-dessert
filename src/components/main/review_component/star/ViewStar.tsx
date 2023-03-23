import React from "react";
import Styled from './viewStar.module.css'

interface starSate {
  valueStar :number
}

export const ViewStar = ({valueStar}: starSate) => {


  return (
    <React.Fragment>
      <div className={Styled.startRating}>
        <div style={{width:valueStar*40}} className={Styled.starRating_fill}>
        </div>
      </div>
    </React.Fragment>
  )
}