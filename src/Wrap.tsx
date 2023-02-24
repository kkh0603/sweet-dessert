
import React from 'react';
import Styled from './wrap.module.css';
import {Reset} from 'styled-reset'
import { Header } from './components/header/Header';
import { Contents } from './components/main/Contents';

import { useSelector, useDispatch } from 'react-redux';
import { RootState} from './states/store';
import { Dispatch } from 'redux';

function Wrap() {

  const dispatch : Dispatch = useDispatch();
  const topbarPath = useSelector( (state: RootState) => state.operatePath)

  return (
    <React.Fragment>
      <Reset/>
        <div id={Styled.Wrap}>
          <Header/>
          <Contents/>
          <div>  </div>
          <button>클릭</button>
        </div>
    </React.Fragment>
  );
}

export default Wrap;
