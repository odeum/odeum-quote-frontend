import { CALCULATE_TOTALPRICE } from '../Actions/quoteAction';
const initialUserState = {

    arr: []
}
export function calculatePrice(state = initialUserState, action) {
    switch (action.type) {

        case CALCULATE_TOTALPRICE:
            var temp = action.payload.name
            if(state.arr === []){
                return {
                    ...state,
                    arr: [...state.arr, action.payload]
                }
            }else{
                console.log(state.arr)
                 state.arr.map((item) => {
                     console.log(item.name + ' hvad er temp ' + temp)
                    if(item.name === temp){
                       item.price = temp.price
                    }
                })
            }
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
           /* var temp = ''
            console.log(state.arr)
            state.arr.map((item) => {
                //console.log('item', item)
                return temp = item.name
            })*/
            if (action.payload.name === temp) {
                console.log('action payload ' + action.payload.price) 
                return {
                    arr: [action.payload]
                }
            } else {
                return {
                    ...state,
                    arr: [...state.arr, action.payload]
                }

            }
        default: return state
    }

}