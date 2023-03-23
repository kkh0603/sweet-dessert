import React from "react";
import Styled from './viewStar.module.css'

interface starSate {
  valueStar :number
}

export const ViewStar = ({valueStar}: starSate) => {


  return (
    <React.Fragment>
      <div className={Styled.startRadio}>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
        <label className={Styled.startRadio_box}>
        </label>
      </div>
    </React.Fragment>
  )
}