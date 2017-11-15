import {createStore, applyMiddleware} from 'redux'; 
import ReduxPromise from 'redux-promise';
import rootReducer from './Reducers'; 

export default(initialState) => {
    return createStore(rootReducer, applyMiddleware(ReduxPromise) ,initialState); 
}