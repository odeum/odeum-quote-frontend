import axios from 'axios';
import {createDate} from '../Components/HelperFuncs/createDate'

export const SAVE_QUOTE = 'SAVE_QUOTE';
export const saveQuote = (values, selectedCustomer, titleDescribtion, textDescribtion, calculatePrice, totalPrice) => {
    var date = createDate();
    var temp = 0
    calculatePrice.arr.forEach(item => {
         temp += item.price
    });
    const url = `http://localhost:8080/api/quotation/post`;
    const request = axios.post(`${url}`, {
        customerID: selectedCustomer,
        salesPerson: '5a1fd2d039b2ad376549419f',
        status: 'Delivered',
        date: date,
        description: [
            {
                title: titleDescribtion,
                description: textDescribtion
            }],
        product: calculatePrice.arr,
        totalPrice: temp
    })
    return {
        type: SAVE_QUOTE,
        payload: request
    }
}

export const CHOSEN_PRODUCTS = 'CHOSEN_PRODUCTS'
export const chosenProducts = (productID, price, name, amount, discount, sub ,description) => {
    return {
        type: CHOSEN_PRODUCTS,
        payload: { productID, price, name, amount, discount, sub, description }
    }
}

export const FECTCH_QUOTATION = 'FECTCH_QUOTATION';
export const fetchQuotation = () => {
    const url = `http://localhost:8080/api/quotation/quotations`;
    const request = axios.get(url);
    return {
        type: FECTCH_QUOTATION,
        payload: request
    };
}