
import {fetchProducts, saveProduct} from './productReducer'
import {chosenProducts, fetchQuotation} from './quoteReducer';
import salesPerson from './salesPersonReducer'
import {fetchCustomer ,fetchOneCustomer} from './customerReducer'; 
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    product: fetchProducts,
    saveProduct: saveProduct,
    customer: fetchCustomer, 
    salesPerson: salesPerson,
    chosenProducts: chosenProducts,
    quotation: fetchQuotation, 
    oneCustomer: fetchOneCustomer
}); 

export default rootReducer; 

