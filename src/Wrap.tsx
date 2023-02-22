
import React from 'react';
import Styled from './wrap.module.css';
import {Reset} from 'styled-reset'
import { Header } from './components/header/Header';
import { Contents } from './components/main/Contents';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './states/store';
import { addMenu } from './states/store_component/operate';

function Wrap() {

  const operate = useSelector((state: RootState) => state.operatePath.point)
  const dispatch =  useDispatch();

  return (
    <React.Fragment>
      <Reset/>
        <div id={Styled.Wrap}>
          <Header/>
          <Contents/>
        </div>
    </React.Fragment>
  );
}

export default Wrap;
