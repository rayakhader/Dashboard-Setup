import axios from 'axios';
import setupRequestInterceptor from './interceptors/requestInterceptor';
import setupResponseInterceptor from './interceptors/responseInterceptor';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

setupRequestInterceptor(axiosInstance);
setupResponseInterceptor(axiosInstance);

export default axiosInstance;
