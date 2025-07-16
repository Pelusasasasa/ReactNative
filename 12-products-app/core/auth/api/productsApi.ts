import axios from 'axios';
import { Platform } from 'react-native';

const stage = process.env.EXPO_PUBLIC_STAGE || 'dev';

let API_URL = '';

if(stage === 'prod'){
    API_URL = process.env.EXPO_PUBLIC_URL || '';
}else if(Platform.OS === 'ios'){
    API_URL = process.env.EXPO_PUBLIC_IOS || '';
}else{
    API_URL = process.env.EXPO_PUBLIC_ANDROID || '';
}

const productosApi = axios.create({
    baseURL: API_URL
});


export { productosApi };

