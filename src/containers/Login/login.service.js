import axios from '../../axios';
/**
 * @param {string} email User email
 * @param {string} password User password
 * @param {string} type User  type,  either  ADMINISTRATOR, REGULAR or PREMIUM in
 *                      order to know wich endpoint will axios be reaching
 */
const setCredentials = ( email, password, type ) => {
    return new Promise( ( resolve, reject ) => {
        const data = { email, password };
        const endpoint = type === 'ADMINISTRATOR' ? 'Administrators' : 'Customers';
        axios.post( `/${endpoint}/login`, data )
            .then( res => {
                storeCredentials( res.data );
                resolve( res.data );
            })
            .catch( err => reject( err ) );
    });
};

const storeCredentials = data => {
    localStorage.setItem( 'NC_token', data.id );
    localStorage.setItem( 'NC_userId', data.userId );
    localStorage.setItem( 'NC_type', data.type );
};

export {
    setCredentials
};
