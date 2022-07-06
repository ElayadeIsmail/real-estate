import axios from 'axios';
import { API_URL } from '~/constants/index';

const buildClient = (token = '') => {
    const client = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return client;
};

const client = axios.create({
    baseURL: API_URL,
});

client.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        // add it to the headers as Authorization
        // return the config
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// client.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     async (err) => {
//         const originalConfig = err.config;
//         if (err.response) {
//             // Access Token was expired
//             if (err.response.status === 401 && !originalConfig._retry) {
//                 originalConfig._retry = true;
//                 try {
//                     // get new access token
//                     // and retry the request
//                     // client.defaults.headers.common['x-access-token'] =
//                     //     accessToken;
//                     return client(originalConfig);
//                 } catch (_error: any) {
//                     if (_error.response && _error.response.data) {
//                         return Promise.reject(_error.response.data);
//                     }
//                     return Promise.reject(_error);
//                 }
//             }
//             if (err.response.status === 403 && err.response.data) {
//                 return Promise.reject(err.response.data);
//             }
//         }
//         return Promise.reject(err);
//     },
// );

export { client };
