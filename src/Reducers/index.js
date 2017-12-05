
import {fetchProducts, saveProduct} from './productReducer'
import {chosenProducts, fetchQuotation} from './quoteReducer';
import salesPerson from './salesPersonReducer'
import customer from './customerReducer'; 
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    product: fetchProducts,
    saveProduct: saveProduct,
    customer: customer, 
    salesPerson: salesPerson,
    chosenProducts: chosenProducts,
    quotation: fetchQuotation
}); 

export default rootReducer; 

