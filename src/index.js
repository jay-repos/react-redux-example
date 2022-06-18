import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './app/store'
import { Provider } from 'react-redux'
//import { Game } from './features/game/Game';
//import { Counter } from './features/counter/Counter';
import App from './App'



ReactDOM.render(
  <Provider store={store}>
    {/* <Game /> */}
    {/* <Counter /> */}
    <App />
  </Provider>,
  document.getElementById('root')
);

