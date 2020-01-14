import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { initialState } from './state'
import rootReducer from './reducers'
import { api } from "./middleware";

const getMiddlewares = () => {
  return [thunk, api, logger];
}
const store = createStore(rootReducer, initialState, applyMiddleware(...getMiddlewares()))
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, 
    document.getElementById('root'));
    

serviceWorker.unregister();
