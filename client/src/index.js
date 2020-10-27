import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//HashRouter : 라우팅 안전하게 할 수 있게 도와줌
import { BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(()=>{ return [{ id:0, name:'코로나', quan:22 }]});

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
