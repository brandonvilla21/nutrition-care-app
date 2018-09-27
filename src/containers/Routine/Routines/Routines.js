import React from 'react';
import AddButton from '../../../components/AddButton';

const Routines = () => {
    return (
        <React.Fragment>
            <AddButton to="/dashboard/routine/create"/>
            <h2>This sould show all routines</h2>
        </React.Fragment>
    );
};


export default Routines;