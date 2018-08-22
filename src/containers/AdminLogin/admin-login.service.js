import axios from '../../axios';

const setCredentials = ( email, password ) => {
    return new Promise( ( resolve, reject ) => {
        const data = { email, password };
        axios.post( '/Administrators/login', data )
            .then( res => {
                storeToken( res.data );
                resolve( res.data );
            })
            .catch( err => reject( err ) );
    });
};

const storeToken = data => localStorage.setItem( 'NC_token', data.id );

export {
    setCredentials
};
