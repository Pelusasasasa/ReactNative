import axios from 'axios';

const productosApi = axios.create({
    baseURL: 'localhost:3000/api'
});


export { productosApi };
