// to be able to combine reducers
import { combineReducers } from 'redux';
// reducers imported
import todoReducer from './todoReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ 
    todos: todoReducer,
    auth: authReducer
})

export default rootReducer;