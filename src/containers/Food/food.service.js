import axios from '../../axios';

const getFoods = () => {
    return new Promise( ( resolve, reject ) => {
        axios.get( '/Foods' )
            .then( res => resolve( handleResponse( res ) ) )
            .catch( err => reject( err ) );
    });
};

const submitFood = food => {
    return new Promise( ( resolve, reject ) => {
        axios.post( '/Foods', food )
            .then( res => resolve( handleResponse( res ) ) )
            .catch( err => reject( err ) );
    });
};

const handleResponse = res => res.data ? res.data : {};

export {
    getFoods,
    submitFood
};