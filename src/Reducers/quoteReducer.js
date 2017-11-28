import { CALCULATE_TOTALPRICE } from '../Actions/quoteAction';
const initialUserState = {

    arr: []
}
export function calculatePrice(state = initialUserState, action) {
    switch (action.type) {

        case CALCULATE_TOTALPRICE:
            var temp = action.payload
            var tempArr = state.arr
            var flag = false
            console.log(state.arr)
            if (state.arr.length > 0) {
                tempArr.map((item) => {
                    if (item.name === temp.name) {
                        item.price = temp.price
                        flag = true
                    } 
                })
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
                return { ...state.arr, arr: [...state.arr] }
            }
        default: return state
    }

}