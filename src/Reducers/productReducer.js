import { FETCH_PRODUCTS, SAVE_PRODUCT } from '../Actions/productAction';

export function fetchProducts(state = [], action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            state = [];
            return state.concat([action.payload.data]);
        default: return state
    }
}

const initialUserState = {
    arr: []
}

export function saveProduct(state = initialUserState, action) {
    switch (action.type) {
        case SAVE_PRODUCT:
            return { ...state, arr: [...state.arr, action.payload] }
        default: return state
    }
}