import React from "react";
import Home from './containers/CounterContainer'
// import store from './services/store'
import {Provider} from 'react-redux'
import {store} from './services/store'

export default function App() {
  
  return (
    <Provider store={store}>
      
      <Home />
      </Provider>
  );

}