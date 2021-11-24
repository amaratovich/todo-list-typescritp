import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {rootReducer} from "./store/reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools())
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
             <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals();
