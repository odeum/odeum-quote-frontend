import axios from 'axios';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const fetchQuote = (values, selectedCustomer, titleDescribtion, textDescribtion, calculatePrice) => {
    console.log('action caluteprice', calculatePrice.arr)
    console.log('action caluteprice', selectedCustomer)
    // values.customerID = selectedCustomer;
    // values.description = titleDescribtion; 
    // values.description = textDescribtion; 
    // values.product = calculatePrice; 
    const url = `http://localhost:8080/api/quotation/post`;
    const request = axios.post(`${url}`, {
        customerID: selectedCustomer,
        status: 'Delivered',
        description: [
            {
                title: titleDescribtion,
                description: textDescribtion
            }],
        //description: textDescribtion,
        product: calculatePrice.arr
    })
    return {
        type: FETCH_QUOTE,
        payload: request
    }
}

export const CALCULATE_TOTALPRICE = 'CALCULATE_TOTALPRICE'
export const calculatePrice = (id, price, name, amount, discount) => {
    return {
        type: CALCULATE_TOTALPRICE,
        payload: { id, price, name, amount, discount }
    }
}