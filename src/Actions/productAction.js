import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const fetchProducts = () => {
    const url = `http://localhost:8080/api/product/products`;
    const request = axios.get(url);
    return {
        type: FETCH_PRODUCTS,
        payload: request
    };
}

export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const saveProducts = (product, amount) => {
    return {
        type: SAVE_PRODUCT,
        payload: product
    };
}
