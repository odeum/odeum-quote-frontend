
import {fetchProducts, saveProduct} from './productReducer'
import {calculatePrice, fetchQuotation} from './quoteReducer';
import customer from './customerReducer'; 
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    product: fetchProducts,
    saveProduct: saveProduct,
    customer: customer, 
    calculatePrice: calculatePrice,
    quotation: fetchQuotation
}); 

export default rootReducer; 

