import React, { useEffect } from "react";
import Styled from './subNavbar.module.css'
import { useLocation } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { OperateDispatch } from "../../../redux/store";
import { resultTest } from "../../../redux/store_component/test";

export const SubNavbar = () => {
  
  let readLocation = useLocation().pathname
  let test = useSelector((state : RootState) => state).test1.qqq
  const dispatch = useDispatch()
  
  useEffect(()=>{
  })

  return (
    <React.Fragment>
      <div className={Styled.lnb_box}>
        <div className={Styled.lnb_area}>
          <div onClick={()=>{dispatch(resultTest(readLocation))}} className={Styled.path_root}>
            {'aaaaas'}
          </div>
          <div className={Styled.Sub_menu}>
            bbbbbb
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}