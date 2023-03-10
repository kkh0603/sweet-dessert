/* eslint-disable */
import Styled from './navbar.module.css';
import React, { useState, } from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { displayPath, categoryUpdate } from '../../../redux/store_component/operate';
import { RootState } from '../../../redux/store';

export const Navbar = () => {
  const navgate = useNavigate()

  React.useEffect(()=>{
    navgate('/home')
  },[])


  const orderMenu = useSelector((state:RootState) => state.operatePath.orderMenu)

  let navigate = useNavigate();
  let dispatch = useDispatch()

  return (
    <React.Fragment>
      <nav>
        <div className={Styled.gnb_box}>
          <ul className={Styled.gnb_list}>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/home');
                                            dispatch(displayPath('home'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/home.png'} alt='Home'/>
                <span className='testSpan'>HOME</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/order/All');
                                            dispatch(displayPath('order'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/order.png'} alt='oreder'/>
                <span>ORDER</span>
              </div>
              <div className={Styled.order_sub_menu}>
                <ul className={Styled.order_sub_menu_list}>
                  {
                    orderMenu.map((a,i)=> {
                      return (
                        <li key={a} 
                            className={Styled.order_sub_menu_item} 
                            onClick={(e)=>{e.stopPropagation(); 
                              navgate('/order/'+a);
                              dispatch(categoryUpdate(i))
                            }}>{a}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/cart');
                                            dispatch(displayPath('cart'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/cart.png'} alt='cart'/>
                <span>CART</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/review');
                                            dispatch(displayPath('review'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/review.png'} alt='review'/>
                <span>Review</span>
              </div>
              <div className={Styled.review_sub_menu}>
                <ul className={Styled.review_sub_menu_list}>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </React.Fragment>
  )
}


