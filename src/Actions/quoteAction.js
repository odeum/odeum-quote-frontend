import axios from 'axios';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const fetchQuote = (values, selectedCustomer, titleDescribtion, textDescribtion, calculatePrice, totalPrice) => {
    console.log('action caluteprice', calculatePrice.arr)
    console.log('action caluteprice', selectedCustomer)
    var temp = 0
    calculatePrice.arr.forEach(item => {
         temp += item.price
    });
    console.log('totalprice', temp)
    const url = `http://localhost:8080/api/quotation/post`;
    const request = axios.post(`${url}`, {
        customerID: selectedCustomer,
        status: 'Delivered',
        description: [
            {
                title: titleDescribtion,
                description: textDescribtion
            }],
        product: calculatePrice.arr,
        totalPrice: temp
    })
    return {
        type: FETCH_QUOTE,
        payload: request
    }
}

export const CALCULATE_TOTALPRICE = 'CALCULATE_TOTALPRICE'
export const calculatePrice = (productID, price, name, amount, discount) => {
    return {
        type: CALCULATE_TOTALPRICE,
        payload: { productID, price, name, amount, discount }
    }
}