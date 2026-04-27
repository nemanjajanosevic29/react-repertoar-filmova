import axios from 'axios';

const AxiosConfig = axios.create({
    baseURL: 'http://localhost:5111/api',
}) 

export default AxiosConfig;