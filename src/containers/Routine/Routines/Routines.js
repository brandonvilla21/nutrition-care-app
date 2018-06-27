import React from 'react';
import AddButton from '../../../components/AddButton';

const Routines = () => {
    return (
        <div>
            <h2>This sould show all routines</h2>
            <AddButton to="/dashboard/routine/create"/>
        </div>
    );
};


export default Routines;