import axios from 'axios';

export const FETCH_SALESPERSON = 'FETCH_SALESPERSON';
export const fetchSalesPerson = () => {
    const url = `http://localhost:8080/api/salesperson/get`;
    const request = axios.get(url);
    console.log('request', request); 
    return {
        type: FETCH_SALESPERSON,
        payload: request
    };
}