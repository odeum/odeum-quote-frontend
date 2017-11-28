import axios from 'axios';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const fetchQuote = () => {
    var name = 'post1'
    const url = `http://localhost:8080/api/pdf/post/${name}`;
    const request = axios(url);
    return {
        type: FETCH_QUOTE, 
        payload: request 
    }
}