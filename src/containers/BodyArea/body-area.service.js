import axios from '../../axios';

const getBodyAreas = () => {
    return new Promise( ( resolve, reject ) => {
        axios.get( '/BodyAreas' )
            .then( res => resolve( handleResponse( res ) ) )
            .catch( err => reject( err ) );
    });
};

const submitBodyArea = bodyArea => {
    return new Promise( ( resolve, reject ) => {
        axios.post( '/BodyAreas', bodyArea )
            .then( res => resolve( handleResponse( res ) ) )
            .catch( err => reject( err ) );
    });
};

const handleResponse = res => res.data ? res.data : {};

export {
    getBodyAreas,
    submitBodyArea
};