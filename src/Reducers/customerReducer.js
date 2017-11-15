import { FETCH_CUSTOMER } from '../Actions/customerAction';

export default function (state = [], action) {
    console.log('test'); 
    switch (action.type) {
        case FETCH_CUSTOMER:
        console.log(state.concat([action.payload.data] ));
            state = [];
            return state.concat([action.payload.data] );
            
        default: return state
    }
}