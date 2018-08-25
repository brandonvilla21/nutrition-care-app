import axios from '../../axios';

const handleResponse = res => res.data ? res.data : {};

const createNewUser = data => {
    delete data.passwordConfirm;
    return new Promise( ( resolve, reject ) => {
        axios.post( 'Customers', data )
            .then( response => resolve ( handleResponse( response ) ) )
            .catch( err => reject( err ) );
    });
};

export {
    createNewUser
};
