import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import redux store
import { createStore, applyMiddleware } from 'redux';
// redux middleware
import thunk from 'redux-thunk';
// import root reducer
import rootReducer from './redux/reducers/rootReducer'
// for using the redux store inside a react app
import { Provider } from 'react-redux';

// create a redux store to store the state of the app and access to it from any compinent in our app
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    {/* using provider element to use the store */}
    <Provider store = { store }>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
