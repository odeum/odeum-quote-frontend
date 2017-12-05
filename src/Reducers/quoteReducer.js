import { CHOSEN_PRODUCTS, FECTCH_QUOTATION } from '../Actions/quoteAction';
const initialUserState = {

    arr: []
}
export function chosenProducts(state = initialUserState, action) {
    switch (action.type) {
        case CHOSEN_PRODUCTS:
            var temp = action.payload
            var tempArr = state.arr
            var flag = false
            
            if (state.arr.length > 0) {
                state.arr.forEach(item => {
                    if (item.name === temp.name) {
                        item.price = temp.price
                        item.amount = temp.amount
                        item.discount = temp.discount
                        flag = true
                    } 
                });

                if(flag === false){
                    return {
                        ...state,
                        arr: [...state.arr, action.payload]
                    }
                }

            } else {
                return {
                    ...state,
                    arr: [...state.arr, action.payload]
                }
            }

            if (flag) {
                state.arr = tempArr
                return {arr: [...state.arr] }
            }
            
            break
        default: return state
    }
}

export function fetchQuotation(state = [], action) {
    switch (action.type) {
        case FECTCH_QUOTATION:
            state = [];
            return state.concat([action.payload.data]);
        default: return state
    }
}