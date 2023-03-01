import React from "react";
import Styled from './subNavbar.module.css'

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const SubNavbar = () => {
  
  let pagePath = useSelector((state:RootState) =>state.operatePath.displayPath)

  return (
    <React.Fragment>
      <div className={Styled.lnb_box}>
        <div className={Styled.lnb_area}>
          <div className={Styled.path_root}>
            <span>현재 페이지는 : </span>
            <span>{pagePath}</span>
          </div>
          <div className={Styled.Sub_menu}>
            bbbbbb
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}