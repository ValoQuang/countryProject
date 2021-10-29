import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import makeStore from './redux/store'
import App from './App';

const store=makeStore()
//Dark theme

ReactDOM.render(
  <Provider store={store}> 
    <App/> 
  </Provider>
  ,
  document.getElementById('root')
);
