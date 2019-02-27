import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-js4.firebaseio.com/'
});

instance.interceptors.request.use(req => {
    return req;
});

export default instance;