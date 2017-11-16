import { FETCH_CUSTOMER } from '../Actions/customerAction';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CUSTOMER:
            state = [];
            return state.concat([action.payload.data] );
            
        default: return state
    }
}