import cart from './cart'; 
import product from './productReducer'
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    cart: cart,
    product: product
}); 

export default rootReducer; 

