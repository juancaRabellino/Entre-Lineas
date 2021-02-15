import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
=======
// import {applyMiddleware, createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootReducer from '.redux/reducers/rootReducer'
// import thunk from 'redux-thunk'
>>>>>>> f47e040fd5e01a4a34a853d6b6215e026b14d353

// const store = createStore (rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);


