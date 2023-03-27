/* eslint-disable */
import Styled from './navbar.module.css';
import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { displayPath } from '../../../redux/store_component/operate';
import { RootState } from '../../../redux/store';
import { itemListSet } from '../../../redux/store_component/order';

export const Navbar = () => {
  const navgate = useNavigate()

  React.useEffect(()=>{
    navgate('/home')
  },[])


  const orderMenu = useSelector((state:RootState) => state.operatePath.orderMenu)
  const cartItems = Object.values(useSelector((state:RootState) => state.cart.cartList))

  let navigate = useNavigate();
  let dispatch = useDispatch()

  useEffect(()=>{},[dispatch])

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
                <img src={process.env.PUBLIC_URL + `/navIcon/home.png`} alt='Home'/>
                <span className='testSpan'>HOME</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/order/pudding');
                                            dispatch(displayPath('order'));
                                            dispatch(itemListSet(cartItems));
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + `/navIcon/order.png`} alt='oreder'/>
                <span>ORDER</span>
              </div>
              <div className={Styled.order_sub_menu}>
                <ul className={Styled.order_sub_menu_list}>
                </ul>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/cart');
                                            dispatch(displayPath('cart'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + `/navIcon/cart.png`} alt='cart'/>
                <span>CART</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/review');
                                            dispatch(displayPath('review'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + `/navIcon/review.png`} alt='review'/>
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


