import { FETCH_SALESPERSON } from '../Actions/salesPersonAction';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SALESPERSON:
            state = [];
            return state.concat([action.payload.data] );
            
        default: return state
    }
}