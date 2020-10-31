import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//HashRouter : 라우팅 안전하게 할 수 있게 도와줌
import { BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';


let 초기값 = [{ id:0, name:'코로나', quan:1 },{ id:1, name:'코로나2', quan:2 }];

function reducer(state = 초기값, 액션) {

  if (액션.type === '항목추가' ) {
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  } else if (액션.type === '수량증가') {
    let copy = [...state];
    copy[액션.id].quan++;

    return copy;
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    if (copy[액션.id].quan > 0 ) {
      copy[액션.id].quan--;
    }

    return copy;;
  } else {
    return state;
  }
}

function reducer2(state = true, 액션) {
    if (액션.type === '닫기') {
      return !state;
    } else {
      return state;
    }
}



let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
