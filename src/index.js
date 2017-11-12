import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootReducer from './reducers'


// will help ypu to hold async behavior of the aplication
//[] => ['','']
import thunk from 'redux-thunk'
//  Provider will provide us with state throughout all Application
import { Provider } from 'react-redux'
//  this functon will create us a store
import {createStore,applyMiddleware} from 'redux';
// combine reducer will return us RootReducer that we use to create a store


const store = createStore(RootReducer,
    // applying thunk here 
    applyMiddleware(thunk)
);
ReactDOM.render(
//   and we pass the store throgh Provider
    <Provider store={store} >

        <App />

    </Provider>  
  
  , document.getElementById('root'));
registerServiceWorker();
