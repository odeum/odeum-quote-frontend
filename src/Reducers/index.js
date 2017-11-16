
import product from './productReducer'
import customer from './customerReducer'
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    product: product,
    customer: customer
}); 

export default rootReducer; 

