import { CALCULATE_TOTALPRICE } from '../Actions/quoteAction';

const initialUserState = {

    arr: []
}
export function calculatePrice(state = initialUserState, action) {
    switch (action.type) {
        case CALCULATE_TOTALPRICE:
        state.arr.map((item)=> {
            console.log('item', item)
            if(action.payload.name === item.name){
                console.log('damn nigger'); 
            }else{
                
            }
            return item  
        })
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        default: return state
    }

}