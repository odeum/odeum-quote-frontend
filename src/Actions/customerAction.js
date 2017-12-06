import axios from 'axios';
import config from '../config'

export const FETCH_CUSTOMER = 'FETCH_CUSTOMERS';
export const fetchCustomers = () => {
    const url = `http://crm.webhouse.dk/rest/crm/organisation/list`;
    const request = axios.get(url, config);
    return {
        type: FETCH_CUSTOMER,
        payload: request
    };
}

export const FETCH_ONECUSTOMER = 'FETCH_ONECUSTOMER'; 
export const fecthOneCustomer = (id) => {
    console.log('id', id); 
    const url = `http://crm.webhouse.dk/rest/crm/organisation/${id}`;
    const request = axios.get(url, config);
    console.log('request', request);    
    return {
        type:FETCH_ONECUSTOMER, 
        payload:request  
    } 
}