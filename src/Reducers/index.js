import cart from './cart'; 
import product from './productReducer'
import customer from './customerReducer'
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    cart: cart,
    product: product,
    customer: customer
}); 

export default rootReducer; 

