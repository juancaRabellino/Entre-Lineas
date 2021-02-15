import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
// import {applyMiddleware, createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootReducer from '.redux/reducers/rootReducer'
// import thunk from 'redux-thunk'
=======
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
>>>>>>> 950e769f029c11a92f0d875202bf4c290d5054ce

// const store = createStore (rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);


