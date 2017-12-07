import axios from 'axios';
import {createDate} from '../Components/HelperFuncs/createDate'

export const SAVE_QUOTE = 'SAVE_QUOTE';
export const saveQuote = (values, selectedCustomerId, selectedCustomerName, titleDescribtion, textDescribtion, calculatePrice, totalPrice) => {
    var date = createDate();
    var temp = 0
    console.log('daddy')
    calculatePrice.arr.forEach(item => {
         temp += item.price
    });
    const url = `http://localhost:8080/api/quotation/post`;
    const request = axios.post(`${url}`, {
        customerID: selectedCustomerId,
        customerName: selectedCustomerName,
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

export const CREATE_PDF = 'CREATE_PDF'
export const createPdf = (values, selectedCustomerId, selectedCustomerName, customerContactFirstName, customerContactLastName, 
    customerOrgAddress, customerOrgZip, customerOrgCity, titleDescribtion, textDescribtion, calculatePrice, companyName, contactPerson, email, phone) => {
    var date = createDate();
    var temp = 0
    console.log('daddy')
    calculatePrice.arr.forEach(item => {
         temp += item.price
    });
    const url = `http://localhost:8080/api/pdf/postPdf`
    const request = axios.post(`${url}`,{ 
        customerID: selectedCustomerId,
        customerName: selectedCustomerName,
        customerContactFirstName: customerContactFirstName,
        customerContactLastName: customerContactLastName,
        customerOrgAddress: customerOrgAddress,
        customerOrgZip: customerOrgZip,
        customerOrgCity: customerOrgCity,
        companyName: companyName, 
        contactPerson: contactPerson, 
        email: email, 
        phone: phone,
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
        type: CREATE_PDF,
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