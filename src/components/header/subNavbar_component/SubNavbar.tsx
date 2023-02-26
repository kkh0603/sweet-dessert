import React, { useEffect } from "react";
import Styled from './subNavbar.module.css'
import { useLocation } from "react-router";

import { RootState } from "../../../redux/store";
import { OperateDispatch } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";

export const SubNavbar = () => {

  let readLocation = useLocation()

  useEffect(()=>{
    console.log(readLocation.pathname)
  }, [readLocation])

  return (
    <React.Fragment>
      <div className={Styled.lnb_box}>
        <div className={Styled.lnb_area}>
          <div className={Styled.path_root}>
            aaaaaa
          </div>
          <div className={Styled.Sub_menu}>
            bbbbbb
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}