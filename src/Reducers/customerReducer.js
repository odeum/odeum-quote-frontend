import { FETCH_CUSTOMER, FETCH_ONECUSTOMER } from '../Actions/customerAction';

export const fetchCustomer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CUSTOMER:
            state = [];
            return state.concat([action.payload.data] );
        default: return state
    }
}

export const fetchOneCustomer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ONECUSTOMER:
        console.log('state', state);
            return action.payload.data;
        default: return state
    }
}