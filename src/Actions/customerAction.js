import axios from 'axios';
import config from '../config'

export const FETCH_CUSTOMER = 'FETCH_CUSTOMERS';
export const fetchCustomers = () => {
    const url = `http://crm.webhouse.dk/rest/crm/organisation/list`;
    const request = axios.get(url, config);
    console.log(request)
    return {
        type: FETCH_CUSTOMER,
        payload: request
    };
}