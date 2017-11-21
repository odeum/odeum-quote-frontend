import { FETCH_PRODUCTS } from '../Actions/productAction';

export default function (state = [], action) {
    console.log('hallo'); 
    switch (action.type) {
        case FETCH_PRODUCTS:
            state = [];
            return state.concat([action.payload.data] );
            
        default: return state
    }
}