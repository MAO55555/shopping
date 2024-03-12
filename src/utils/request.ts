import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8080', // 设置默认的 baseURL
    timeout: 5000, // 设置默认的 request timeout
})

request.interceptors.request.use((config) => {
    return config;
})

request.interceptors.response.use((response) => {
    return response;
},(error) => {
    return Promise.reject(error);
})

export default request;