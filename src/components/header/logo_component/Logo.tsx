import React from 'react'
import Styled from './logo.module.css'
import { useNavigate } from 'react-router-dom';


export const Logo = () => {


  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={Styled.ico_box} onClick={()=>{navigate('/')}}>
        <img 
          src={process.env.PUBLIC_URL + '/Pudding.png'} 
          alt='logo' 
          className={Styled.ico_img}/>
        <p className={Styled.ico_name}>Sweet<br/>Dessert</p>
      </div>
    </React.Fragment>
  )
}