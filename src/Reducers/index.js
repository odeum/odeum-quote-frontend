
import {fetchProducts, saveProduct} from './productReducer'
import {calculatePrice} from './quoteReducer';
import customer from './customerReducer'; 
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    product: fetchProducts,
    saveProduct: saveProduct,
    customer: customer, 
    calculatePrice: calculatePrice
}); 

export default rootReducer; 

