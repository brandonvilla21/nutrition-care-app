import axios from 'axios';

const accesToken = () => localStorage.getItem( 'NC_token' );

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: [
        { 'content-type': 'application/json' }
    ]
});

instance.interceptors.request.use( config => {
    if ( accesToken() )
        config.headers.authorization = accesToken();
    return config;
}, error => Promise.reject( error ) );

export default instance;
