import axios from 'axios';

const accessToken = () => localStorage.getItem( 'NC_token' );

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: [
        { 'content-type': 'application/json' }
    ]
});

instance.interceptors.request.use( config => {
    if ( accessToken() )
        config.headers.Authorization = accessToken();
    return config;
}, error => Promise.reject( error ) );

export default instance;
