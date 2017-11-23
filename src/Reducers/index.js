
import {fetchProducts, saveProduct} from './productReducer'
import customer from './customerReducer'
import { combineReducers } from 'redux'; 

const rootReducer = combineReducers({
    product: fetchProducts,
    saveProduct: saveProduct,
    customer: customer
}); 

export default rootReducer; 

