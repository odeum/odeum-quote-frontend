
import {fetchProducts, saveProduct} from './productReducer'
import {chosenProducts, fetchQuotation} from './quoteReducer';
import customer from './customerReducer'; 
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    product: fetchProducts,
    saveProduct: saveProduct,
    customer: customer, 
    chosenProducts: chosenProducts,
    quotation: fetchQuotation
}); 

export default rootReducer; 

