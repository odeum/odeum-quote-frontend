import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const fetchProducts = () => {
    const url = `http://localhost:8080/product/products`;
    const request = axios.get(url);
    console.log(request)
    return {
        type: FETCH_PRODUCTS,
        payload: request
    };
}