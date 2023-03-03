/* eslint-disable */
import Styled from './navbar.module.css';
import React, { useState, } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { displayPath } from '../../../redux/store_component/operate';
import { RootState } from '../../../redux/store';

export const Navbar = () => {
  const navgate = useNavigate()

  React.useEffect(()=>{
    navgate('/home')
  },[])


  const orderMenu = useSelector((state:RootState) => state.operatePath.orderMenu)
  const userMenu = useSelector((state:RootState) => state.operatePath.userMenu)

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
                                            dispatch(displayPath('order'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/order.png'} alt='oreder'/>
                <span>ORDER</span>
              </div>
              <div className={Styled.order_sub_menu}>
                <ul className={Styled.order_sub_menu_list}>
                  {
                    orderMenu.map((a)=> {
                      return (
                        <li key={a} 
                            className={Styled.order_sub_menu_item} 
                            onClick={(e)=>{e.stopPropagation(); navgate('/order/'+a)}}>{a}</li>
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
                                            navigate('/user');
                                            dispatch(displayPath('user'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/user.png'} alt='user'/>
                <span>USER</span>
              </div>
              <div className={Styled.user_sub_menu}>
                <ul className={Styled.user_sub_menu_list}>
                  {
                    userMenu.map((a)=> {
                      return (
                        <li key={a} 
                            className={Styled.user_sub_menu_item}
                            onClick={(e)=>{e.stopPropagation(); navgate('/user/'+a)}}>{a.replace('_',' ')}</li>
                      )
                    })
                  }
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


